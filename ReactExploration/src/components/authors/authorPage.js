"use strict"

var React = require('React');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

class Authors extends React.Component {
  constructor() {
    super();

    this.state = { authors: [] };
  }

  // Not used in ES6 - instead, just set this.state in the ctor
  // // Initialize the shape of our state
  // getInitialState() {
  //   return {
  //     authors: []
  //   };
  // }

  // Populate state prior to loading the component
  componentDidMount() {
    this.setState({ authors: AuthorApi.getAllAuthors() });
  }

  render() {
    return (
      <div>
        <h1>Authors</h1>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
}

module.exports = Authors;
