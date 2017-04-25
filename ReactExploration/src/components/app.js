/*eslint-disable strict*/ // Disable 'use strict' check since we have the global jQuery reference here

var React = require('react');
var Header = require('./common/header');
$ = jQuery = require('jquery');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = App;
