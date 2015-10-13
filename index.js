(function(){
    var Twitter = require('twitter');
    var express = require('express');
    var app = express();
    var methods = require('./methods');

    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    var twitterAPICall = function(methodObj) {
        return function(req, res) {
            var params = req.query,
                method = methodObj.method,
                resource = methodObj.resource,
                json = {};
            
            if (Object.keys(req.params).length === 1) {
                if (typeof req.params.id !== 'undefined') {
                    resource = resource.replace(/:id/, req.params.id);
                }

                if (typeof req.params.slug !== 'undefined') {
                    resource = resource.replace(/:slug/, req.params.slug);
                }
            }

            if (method === 'GET') {
                client.get(resource, params, function(error, tweets, response) {
                    data = processData(tweets, error);
                    res.json(data);
                });
            } else if (method === 'POST') {
                client.post(resource, params, function(error, tweets, response) {
                    data = processData(tweets, error);
                    res.json(data);
                });
            }
        }
    }

    var processData = function(data, error) {
        return (error) ? error : data;
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