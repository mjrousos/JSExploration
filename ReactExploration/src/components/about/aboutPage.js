var React = require('react');

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>
          This application uses the following technologies:
        </p>
        <ul>
          <li>React</li>
          <li>React Router</li>
          <li>Flux</li>
          <li>Node</li>
          <li>Gulp</li>
          <li>Browserify</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    );
  }
}

module.exports = About;
