var React = require('react');

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Hello from React!</h1>
        <p>React, React Router, and Flux for ultra-responsive web-apps!</p>
      </div>
    );
  }
}

module.exports = Home;
