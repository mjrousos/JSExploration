"use strict"

var React = require('React');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

class AuthorPage extends React.Component {
  constructor(props) {
    super(props);

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
        <Link to="author" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors} />

      </div>
    );
  }
}

module.exports = AuthorPage;
