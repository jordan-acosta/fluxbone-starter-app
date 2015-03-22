'use strict';

console.log( 'STARTING APP' );

var React = require('react'),
    app = React.createElement( require('./app') ),
    rendered = function() {
        console.log( 'APP STARTED' );
    };

React.render(
    app,
    document.body,
    rendered
);
