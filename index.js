'use strict';

global.rekuire = require('rekuire');

var app = require('express')(),
    reactEngine = require('express-react-views').createEngine(),
    apiRouter = rekuire('lib/api'),
    logger = rekuire('lib/logger'),
    handleApp = rekuire('lib/app-handler');

app
    .set( 'view engine', 'jsx' )
    .engine( 'jsx', reactEngine )
    .use( logger )
    .use( '/api', apiRouter )
    .get( '/', handleApp )
    .listen( '8000' );

console.log( 'the app listens on port 8000' );
