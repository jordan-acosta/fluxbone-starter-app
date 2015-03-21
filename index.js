'use strict';

var express = require('express'),
    reactEngine = require('express-react-views').createEngine(),

    apiRouter = require('./lib/api-router'),

    logger = function( req, res, next ) {
        console.log( 'req: ', req );
        next();
    },
    handleHome = function( req, res ) {
        res.render( 'index' );
    });

app
    // setup render engine
    .set( 'view engine', 'jsx' )
    .engine( 'jsx', reactEngine )

    // app stuff
    .use( logger )
    .use( '/api', apiRouter )
    .get( '/', handleApp )

    // start
    .listen( '8000' );

console.log( 'the app listens on port 8000' );
