"use strict"

var React = require('react');
var History = require('react-router').browserHistory;
var AuthorForm = require('./authorForm');
var AuthorApi = require('./../../api/authorApi');
var Toastr = require('toastr');

class ManageAuthorPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: {
        id: '',
        firstName: '',
        lastName: ''
      },
      errors: {},
      dirty: false
    };

    this.setAuthorState = this.setAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }

  componentWillMount() {
    var authorId = this.props.params.id; // From the path '/author/:id'
    if (authorId) {
      this.setState({author: AuthorApi.getAuthorById(authorId)});
    }
  }

  setAuthorState(event) {
    this.setState({ dirty: true });
    var field = event.target.name;
    var value = event.target.value;

    this.state.author[field] = value;
    return this.setState({ author: this.state.author });
  }

  authorFormIsValid() {
    var formIsValid = true;
    this.state.errors = {}; // Clear any previous errors

    if (this.state.author.firstName.length < 2) {
      this.state.errors.firstName = 'First name must be at least 2 characters long';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 2) {
      this.state.errors.lastName = 'Last name must be at least 2 characters long';
      formIsValid = false;
    }

    this.setState({ errors: this.state.errors });

    return formIsValid;
  }

  saveAuthor(event) {
    event.preventDefault(); // Prevents the submit event from actually submitting

    if (!this.authorFormIsValid()) {
      return;
    }

    AuthorApi.saveAuthor(this.state.author);
    this.setState({dirty: false});
    Toastr.success('Author Saved');
    History.push('authors');
  }

  render() {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
        errors={this.state.errors} />
    );
  }
}

module.exports = ManageAuthorPage;
