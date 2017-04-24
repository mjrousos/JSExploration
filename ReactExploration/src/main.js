"use strict";

var React = require('react');
var ReactDom = require('react-dom');
var Router = require('react-router').Router;
//var History = require('react-router').hashHistory;
var History = require('react-router').browserHistory;
var routes = require('./routes');

ReactDom.render(<Router history={History}>{routes}</Router>, document.getElementById('app'));

// Old, obsolete
// Router.run(routes, function(RouteHandler) {
//   ReactDom.render(<RouteHandler />, document.getElementById('app'));
// });

