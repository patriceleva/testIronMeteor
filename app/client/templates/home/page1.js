/**
 * Created by insit05 on 04/08/2015.
 */
Template.page1.events({
});

/*****************************************************************************/
/* Page1: Helpers */
/*****************************************************************************/
Template.page1.helpers({
    loc: function () {
        // return 0, 0 if the location isn't ready
        return Geolocation.latLng() || { lat: 0, lng: 0 };
    },
    error: Geolocation.error
});

/*****************************************************************************/
/* Page1: Lifecycle Hooks */
/*****************************************************************************/
Template.page1.onCreated(function () {
});

Template.page1.onRendered(function () {
});

Template.page1.onDestroyed(function () {
});

Template.body.helpers({
});