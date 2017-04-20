$ = jQuery = require('jquery');
var React = require('react');
var ReactDom = require('react-dom');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    var Child;
    switch(this.props.route) {
      case 'about':
        Child = About;
        break;
      default:
        Child = Home;
        break;
    }

    return (
      <div>
        <Header/>
        <Child />
      </div>
    );
  }
}

function render() {
  var route = window.location.hash.substr(1);
  ReactDom.render(<App route={route} />, document.getElementById('app'));
}

window.addEventListener('hashchange', render);
render();
