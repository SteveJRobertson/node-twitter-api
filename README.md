# Node REST API for Twitter
A simple Node webserver for querying the Twitter API.

## Installing
Run ``npm install`` to download the dependencies.

Once the dependencies have been installed, simply run ``npm start`` to run the web server locally. The default local URL is shown below.

```
http://localhost:8081
```

## Setting Twitter API Credentials
Before you can use the API, you will need to [set up a new Twitter app](https://apps.twitter.com/). and create a set of Consumer Keys and Access Tokens. Once these have been set up, you should set them as environment variables on your server to ensure they remain secure. The process of setting environment variables varies depending on your operating system:

- [Windows](https://www.microsoft.com/resources/documentation/windows/xp/all/proddocs/en-us/sysdm_advancd_environmnt_addchange_variable.mspx?mfr=true)
- [Linux](http://www.cyberciti.biz/faq/set-environment-variable-linux/)
- [OSX](http://osxdaily.com/2015/07/28/set-enviornment-variables-mac-os-x/)

The environment variables should be set as follows:

```
TWITTER_CONSUMER_KEY=[Consumer Key]
TWITTER_CONSUMER_SECRET=[Consumer Secret]
TWITTER_ACCESS_TOKEN_KEY=[Access Token]
TWITTER_ACCESS_TOKEN_SECRET=[Access Token Secret]
```

If your app is being deployed to Heroku, the Twitter credentials can be added as [config variables](https://devcenter.heroku.com/articles/config-vars) either on the command line or by logging into your Heroku account.

## Querying Twitter

This server can query any of the [Twitter REST APIs](https://dev.twitter.com/rest/public) by passing the API resource as the path of the server URL. Any parameters should be added as query parameters to the end of the URL. Please remember to URL encode any parameters you pass to the server.

The example below shows how to query the search API locally for the hashtag '#twitterapi'. Note the URL encoding of '#' to '%23'

```
http://localhost:8081/search/tweets?q=%23twitterapi
```
Please refer to the relevant [Twitter API](https://dev.twitter.com/rest/public) page to reference the relevant parameters for each API call.