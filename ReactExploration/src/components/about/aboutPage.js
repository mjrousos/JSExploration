var React = require('react');

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
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

module.exports = AboutPage;
