(function(){
    var Twitter = require('twitter');
    var express = require('express');
    var app = express();
    var method = 'search/tweets';

    var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    var methods = [
        'statuses/mentions_timeline',
        'statuses/home_timeline',
        'statuses/retweets_of_me',
        'search/tweets',
        'lists/statuses',
        'statuses/retweets/:id',
    ];

    var twitterAPICall = function(method) {
        return function(req, res) {
            var params = req.query;
            
            if (Object.keys(req.params).length === 1) {
                method = method.replace(/:id/, req.params.id);
            }

            client.get(method, params, function(error, tweets, response) {
                var json = {};
                if (error) {
                    json = error;
                } else {
                    json = tweets;
                }
                
                res.json(json);
            });
        }
    }

    for (var i in methods) {
        app.get('/' + methods[i], twitterAPICall(methods[i]));
    }

    var server = app.listen(process.env.PORT || 8081, function() {
        var host = server.address().address,
            port = server.address().port;

            console.log("Twitter API app listening at http://%s:%s", host, port);
    });
})();