'use strict';

global.rekuire = require('rekuire');

var express = require('express'),
    app = express(),
    reactEngine = require('express-react-views').createEngine(),
    api = rekuire('lib/api'),
    logger = rekuire('lib/logger'),
    index = rekuire('lib/app-handler');

app
    .set( 'view engine', 'jsx' )
    .engine( 'jsx', reactEngine )
    .use( logger )
    .get( '/', index )
    .use( '/api', api )
    .use( '/static', express.static('static') )
    .listen( '8000' );

console.log( 'the app listens on port 8000' );
