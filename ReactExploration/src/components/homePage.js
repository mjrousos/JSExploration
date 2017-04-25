var React = require('react');
var Link = require('react-router').Link;

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>Hello from React!</h1>
        <p>React, React Router, and Flux for ultra-responsive web-apps!</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }

  // Useful lifecycle hooks

  // Runs before initial render - a place to set initial state, perhaps
  componentWillMount() {
    console.log('Homepage component is about to mount');
  }

  // After initial render - access the DOM, set timers, AJAX requests, other framework setup
  componentDidMount() {
    console.log('Homepage component mounted');
  }

  // Before setting updated props (not on initial render) - used to set state prior to rendering
  componentWillReceiveProps() {
    console.log('Homepage component is about to receive props');
  }

  // Called immediately before render when new props or state are received - Can return false to avoid unnecessary renders (for perf reasons)
  shouldComponentUpdate() {
    console.log('Deciding if homepage component should update');
    return true;
  }

  // Immediately before rendering when new props or state are received (not on initial render, can't change state) - Prepare for an update
  componentWillUpdate() {
    console.log('Homepage component is about to update');
  }

  // Immediately after updates flushed to DOM (not on initial render) - Work with DOM after update
  componentDidUpdate() {
    console.log('Homepage updated');
  }

  // Called just before component will be removed from the DOM - Cleanup, remove DOM elements that were created at mount time, etc.
  componentWillUnmount(){
    console.log('Homepage component is about to unmount');
  }
}

module.exports = Home;
