"use strict"

var React = require('react');
var Link = require('react-router').Link;

class NotFoundPage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Page Not Found</h1>
        <p>Whoops! Sorry, there is nothing to see here.</p>
        <p><Link to="/">Back to Home</Link></p>
      </div>
    );
  }
}

module.exports = NotFoundPage;
