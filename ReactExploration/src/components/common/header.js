"use strict"

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src="images/logo.png" />
          </Link>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="authors">Authors</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

module.exports = Header;
