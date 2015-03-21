'use strict';

var Router = require('express').Router(),
    requireAll = require('require-all'),
    _ = require('lodash'),
    controllers = requireAll({
        dirname: __dirname,
        filter: /(.+-controller)\.js$/
    });

_.each( controllers, function( v, k ) {
    console.log( 'use controller: ', k.split('-')[0] );
    Router.use( k.split('-')[0], v );
});

module.exports = Router;
