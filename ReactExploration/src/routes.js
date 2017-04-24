"use strict"

var React = require('react');
var Router = require('react-router');

var IndexRoute = Router.IndexRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

var aboutPage = require('./components/about/aboutPage');

function confirmTransition(nextState, replace, cb) {
  if (confirm('Are you sure you want to read a page that\'s this boring?!')) {
    cb();
  }
}

var routes = (
  <Route name="app" path="/" component={require('./components/app')}>
    <IndexRoute component={require('./components/homePage')} />
    <Route name="authors" path="/authors" component={require('./components/authors/authorPage')} />
    <Route name="about" path="/about" component={aboutPage} onEnter={confirmTransition} />
    <Redirect from="about-us" to="about" />
    <Redirect from="about/*" to="about" />
    <Route path="*" component={require('./components/notFoundPage')} />
  </Route>
);

module.exports = routes;
