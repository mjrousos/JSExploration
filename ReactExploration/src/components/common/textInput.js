"use strict"

var React = require('react');

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var wrapperClass = "form-group";
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " has-error";
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <input type="text"
            name={this.props.name}
            className="form-control"
            placeholder={this.props.placeHolder || this.props.label}
            ref={this.props.name}   // Used with React.FindDomNode to find a component
            onChange={this.props.onChange}
            value={this.props.value} />
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
}
module.exports = Input;
