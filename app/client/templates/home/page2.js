Restaurants = new Mongo.Collection('restaurant');
/**
 * Created by insit05 on 04/08/2015.
 */
Template.page2.events({
});

/*****************************************************************************/
/* Page2: Helpers */
/*****************************************************************************/
Template.page2.helpers({
    restaurants: function () {
        Meteor.subscribe('get_restaurant')
        return Restaurants.find({});
    }
});

/*****************************************************************************/
/* Page2: Lifecycle Hooks */
/*****************************************************************************/
Template.page2.onCreated(function () {
});

Template.page2.onRendered(function () {
});

Template.page2.onDestroyed(function () {
});

Template.body.helpers({
});
/**
 * Created by insit05 on 04/08/2015.
 */
