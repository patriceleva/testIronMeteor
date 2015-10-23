Restaurants = new Mongo.Collection('restaurant');

/// A utiliser sans autopublish
Meteor.publish('get_restaurant', function () {
    return Restaurants.find({}, { limit: 5 });
});