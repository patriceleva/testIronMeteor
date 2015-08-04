Restaurants = new Mongo.Collection('restaurant');

/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
    restaurants: function () {
        Meteor.subscribe('get_restaurant')
        return Restaurants.find({});
    },
    loc: function () {
        // return 0, 0 if the location isn't ready
        return Geolocation.latLng() || { lat: 0, lng: 0 };
    },
    error: Geolocation.error,
    attributeObject: function() {
        return { jsonData : Restaurants.find({})};
    }
});

/*Tracker.autorun(function() {
 console.log(Geolocation.currentLocation());
 console.log(Geolocation.error());
 console.log(Geolocation.latLng());
 });*/

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});

Template.body.helpers({

});