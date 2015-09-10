/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({

    attributeObject: function() {
        Meteor.subscribe('get_restaurant')
        return { jsonData : Restaurants.find({}) };
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