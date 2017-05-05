"use strict"

var React = require('react');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

class AuthorPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { authors: AuthorStore.getAllAuthors() };
    this._onChange = this._onChange.bind(this);
  }

  // Not used in ES6 - instead, just set this.state in the ctor
  // // Initialize the shape of our state
  // getInitialState() {
  //   return {
  //     authors: []
  //   };
  // }

  componentWillMount() {
    AuthorStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AuthorStore.removeChangeListener(this._onChange);
  }

  // Runs when the author store changes
  _onChange() {
    this.setState({ authors: AuthorStore.getAllAuthors()});
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
