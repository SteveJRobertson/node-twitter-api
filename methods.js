module.exports = [
    {
        method: 'GET',
        resource: 'statuses/mentions_timeline'
    },
    {
        method: 'GET',
        resource: 'statuses/user_timeline'
    },
    {
        method: 'GET',
        resource: 'statuses/home_timeline'
    },
    {
        method: 'GET',
        resource: 'statuses/retweets_of_me'
    },
    {
        method: 'GET',
        resource: 'statuses/retweets/:id'
    },
    {
        method: 'GET',
        resource: 'statuses/show/:id'
    },
    {
        method: 'POST',
        resource: 'statuses/destroy/:id'
    },
    {
        method: 'POST',
        resource: 'statuses/update'
    },
    {
        method: 'POST',
        resource: 'statuses/retweet/:id'
    },
    {
        method: 'POST',
        resource: 'statuses/update_with_media'
    },
    {
        method: 'GET',
        resource: 'statuses/oembed'
    },
    {
        method: 'GET',
        resource: 'statuses/retweeters/ids'
    },
    {
        method: 'GET',
        resource: 'statuses/lookup'
    },
    {
        method: 'POST',
        resource: 'media/upload'
    },
    {
        method: 'GET',
        resource: 'direct_messages/sent'
    },
    {
        method: 'GET',
        resource: 'direct_messages/show'
    },
    {
        method: 'GET',
        resource: 'search/tweets'
    },
    {
        method: 'GET',
        resource: 'direct_messages'
    },
    {
        method: 'POST',
        resource: 'direct_messages/destroy'
    },
    {
        method: 'POST',
        resource: 'direct_messages/new'
    },
    {
        method: 'GET',
        resource: 'friendships/no_retweets/ids'
    },
    {
        method: 'GET',
        resource: 'friends/ids'
    },
    {
        method: 'GET',
        resource: 'followers/ids'
    },
    {
        method: 'GET',
        resource: 'friendships/incoming'
    },
    {
        method: 'GET',
        resource: 'friendships/outgoing'
    },
    {
        method: 'POST',
        resource: 'friendships/create'
    },
    {
        method: 'POST',
        resource: 'friendships/destroy'
    },
    {
        method: 'POST',
        resource: 'friendships/update'
    },
    {
        method: 'GET',
        resource: 'friendships/show'
    },
    {
        method: 'GET',
        resource: 'friends/list'
    },
    {
        method: 'GET',
        resource: 'followers/list'
    },
    {
        method: 'GET',
        resource: 'friendships/lookup'
    },
    {
        method: 'GET',
        resource: 'account/settings'
    },
    {
        method: 'GET',
        resource: 'account/verify_credentials'
    },
    {
        method: 'POST',
        resource: 'account/settings'
    },
    {
        method: 'POST',
        resource: 'account/update_delivery_device'
    },
    {
        method: 'POST',
        resource: 'account/update_profile'
    },
    {
        method: 'POST',
        resource: 'account/update_profile_background_image'
    },
    {
        method: 'POST',
        resource: 'account/update_profile_image'
    },
    {
        method: 'GET',
        resource: 'blocks/list'
    },
    {
        method: 'GET',
        resource: 'blocks/ids'
    },
    {
        method: 'POST',
        resource: 'blocks/create'
    },
    {
        method: 'POST',
        resource: 'blocks/destroy'
    },
    {
        method: 'GET',
        resource: 'users/lookup'
    },
    {
        method: 'GET',
        resource: 'users/show'
    },
    {
        method: 'GET',
        resource: 'users/search'
    },
    {
        method: 'POST',
        resource: 'account/remove_profile_banner'
    },
    {
        method: 'POST',
        resource: 'account/update_profile_banner'
    },
    {
        method: 'GET',
        resource: 'users/profile_banner'
    },
    {
        method: 'POST',
        resource: 'mutes/users/create'
    },
    {
        method: 'POST',
        resource: 'mutes/users/destroy'
    },
    {
        method: 'GET',
        resource: 'mutes/users/ids'
    },
    {
        method: 'GET',
        resource: 'mutes/users/list'
    },
    {
        method: 'GET',
        resource: 'users/suggestions/:slug'
    },
    {
        method: 'GET',
        resource: 'users/suggestions'
    },
    {
        method: 'GET',
        resource: 'users/suggestions/:slug/members'
    },
    {
        method: 'GET',
        resource: 'favorites/list'
    },
    {
        method: 'POST',
        resource: 'favorites/destroy'
    },
    {
        method: 'POST',
        resource: 'favorites/create'
    },
    {
        method: 'GET',
        resource: 'lists/list'
    },
    {
        method: 'GET',
        resource: 'lists/statuses'
    },
    {
        method: 'POST',
        resource: 'lists/members/destroy'
    },
    {
        method: 'GET',
        resource: 'lists/memberships'
    },
    {
        method: 'GET',
        resource: 'lists/subscribers'
    },
    {
        method: 'POST',
        resource: 'lists/subscribers/create'
    },
    {
        method: 'GET',
        resource: 'lists/subscribers/show'
    },
    {
        method: 'POST',
        resource: 'lists/subscribers/destroy'
    },
    {
        method: 'POST',
        resource: 'lists/members/create_all'
    },
    {
        method: 'GET',
        resource: 'lists/members/show'
    },
    {
        method: 'GET',
        resource: 'lists/members'
    },
    {
        method: 'POST',
        resource: 'lists/members/create'
    },
    {
        method: 'POST',
        resource: 'lists/destroy'
    },
    {
        method: 'POST',
        resource: 'lists/update'
    },
    {
        method: 'POST',
        resource: 'lists/create'
    },
    {
        method: 'GET',
        resource: 'lists/show'
    },
    {
        method: 'GET',
        resource: 'lists/subscriptions'
    },
    {
        method: 'POST',
        resource: 'lists/members/destroy_all'
    },
    {
        method: 'GET',
        resource: 'lists/ownerships'
    },
    {
        method: 'GET',
        resource: 'saved_searches/list'
    },
    {
        method: 'GET',
        resource: 'saved_searches/show/:id'
    },
    {
        method: 'POST',
        resource: 'saved_searches/create'
    },
    {
        method: 'POST',
        resource: 'saved_searches/destroy/:id'
    },
    {
        method: 'GET',
        resource: 'geo/id/:place_id'
    },
    {
        method: 'GET',
        resource: 'geo/reverse_geocode'
    },
    {
        method: 'GET',
        resource: 'geo/search'
    },
    {
        method: 'POST',
        resource: 'geo/place'
    },
    {
        method: 'GET',
        resource: 'trends/place'
    },
    {
        method: 'GET',
        resource: 'trends/available'
    },
    {
        method: 'GET',
        resource: 'application/rate_limit_status'
    },
    {
        method: 'GET',
        resource: 'help/configuration'
    },
    {
        method: 'GET',
        resource: 'help/languages'
    },
    {
        method: 'GET',
        resource: 'help/privacy'
    },
    {
        method: 'GET',
        resource: 'help/tos'
    },
    {
        method: 'GET',
        resource: 'trends/closest'
    },
    {
        method: 'POST',
        resource: 'users/report_spam'
    }
];