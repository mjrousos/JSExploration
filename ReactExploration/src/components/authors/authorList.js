"use strict"

var React = require('React');
var PropTypes = require('prop-types');

class AuthorList extends React.Component {
  constructor() {
    super();
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
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {this.props.authors.map(createAuthorRow, this)}
          </tbody>
        </table>
      </div>
    );
  }
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

module.exports = AuthorList;
