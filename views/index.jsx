'use strict';

var React = require('react');

module.exports = React.createClass({
    render: function(){
        // can we get rid of this, and make 
        // just like mustache, where we don't
        // need to use "this.props"?
        // maybe wrap this in a function that
        // changes the scope? :p
        var p = this.props;

        return(
            <html>
                <head>
                    <title>{p.message}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </head>
                <body>
                    <script src = "./static/app.js"></script>
                </body>
            </html>
        );
    }
});
