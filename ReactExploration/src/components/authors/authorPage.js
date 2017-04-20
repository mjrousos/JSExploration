"use strict"

var React = require('React');
var AuthorApi = require('../../api/authorApi');

class Authors extends React.Component {
  constructor() {
    super();
  }

  // Initialize the shape of our state
  getInitialState() {
    return {
      authors: []
    };
  }

  // Populate state prior to loading the component
  componentWillMount() {
    this.setState({ authors: AuthorApi.getAllAuthors() });
  }

  render() {
    var createAuthorRow = function (author) {
      return (
        <tr key={author.id}>
          <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };

    return (
      <div>
        <h1>Authors</h1>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {this.state.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = Authors;
