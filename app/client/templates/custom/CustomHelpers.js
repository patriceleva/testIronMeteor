UI.registerHelper('formatTime', function(context, options) {
    if(context)
        return moment(context).format('MM/DD/YYYY, hh:mm');
});

UI.registerHelper('toJSON', function(context, options) {
    if(context)
        return JSON.stringify(context.fetch());
});