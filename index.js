(function(){
    var Twitter     = require('twitter-node-client').Twitter;
    var express     = require('express');
    var bodyParser  = require('body-parser');
    var app         = express();
    var methods     = require('./methods');
    
    var client = new Twitter({
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY,
        accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: true
    }));

    app.use(function (req, res, next) {
        var allowedOrigins = ['http://localhost:3000', 'http://sr.digital'];
        var origin = req.headers.origin;
        if(allowedOrigins.indexOf(origin) > -1){
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', false);

        next();
    });

    var twitterAPICall = function(methodObj) {
        return function(req, res) {
            var params = req.query,
                callback = params.callback,
                method = methodObj.method,
                resource = methodObj.resource,
                data = {};

                delete params.callback;
                params.q = decodeURIComponent(params.q);
                
            if (Object.keys(req.params).length === 1) {
                if (typeof req.params.id !== 'undefined') {
                    resource = resource.replace(/:id/, req.params.id);
                }

                if (typeof req.params.slug !== 'undefined') {
                    resource = resource.replace(/:slug/, req.params.slug);
                }
            }

            if (method === 'GET') {
                client.getCustomApiCall('/' + resource + '.json', params, function(error, response, body) {
                    res.status(response.statusCode).send({
                        "error": response.statusMessage
                    });
                }, function(data) {
                    data = JSON.parse(data);
                    res.set('Content-Type', 'application/json')
                    res.send(JSON.stringify(data));
                });
            } else if (method === 'POST') {
                client.postCustomApiCall('/' + resource + '.json', params, function(error, response, body) {
                    res.status(response.statusCode).send({
                        "error": response.statusMessage
                    });
                }, function(data) {
                    res.set('Content-Type', 'application/json')
                    res.jsonp(JSON.parse(data));
                });
            }
        }
    }

    for (var i in methods) {
        if (methods[i].method === 'GET') {
            app.get('/' + methods[i].resource, twitterAPICall(methods[i]));
        } else if (methods[i].method === 'POST') {
            app.post('/' + methods[i].resource, twitterAPICall(methods[i]));
        }
    }

    var server = app.listen(process.env.PORT || 8081, function() {
        var host = server.address().address,
            port = server.address().port;

            console.log("Twitter API app listening at http://%s:%s", host, port);
    });
})();