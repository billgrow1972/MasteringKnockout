require.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout-3.1.0',
        'bootstrap': '../lib/bootstrap-3.1.1',
        'jquery': '../lib/jquery-2.1.1.min'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    },
    waitSeconds: 30
});

define(['durandal/system', 'durandal/app'],
function(system, app, extensions) {

    system.debug(true);

    //specify which plugins to install and their configuration
    app.configurePlugins({
        //Durandal plugins
        router:true,
        dialog: true
    });

    app.title = 'Mastering Knockout';
    app.start().then(function () {
        app.setRoot('shell/shell');
    });
});