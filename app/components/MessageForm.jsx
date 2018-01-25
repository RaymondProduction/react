var React = require('react');

class MessageField extends React.Component {
  constructor(props) {
    super(props);
    var isValid = this.validate(props.value);
    this.state = {value: props.value, valid : isValid};
    this.onChange = this.onChange.bind(this);
  }
  validate(val){
    return val.length > 2;
  }
  onChange(e) {
    var val = e.target.value;
    var isValid = this.validate(val);
    this.setState({value: val, valid: isValid});
  }
  render() {
    // color border of the field  for input value
    var color = this.state.valid ? "green" : "red";

    return (
      <p>
          <label>Message:</label><br />
          <input type="text" value={this.state.value} onChange={this.onChange} style ={{borderColor: color}}/>
      </p>
    );
  }
}

class TitleField extends React.Component {
  constructor(props) {
    super(props);
    var isValid = this.validate(props.value);
    this.state = {value: props.value, valid : isValid};
    this.onChange = this.onChange.bind(this);
  }
  validate(val){
    return val.length > 2;
  }
  onChange(e) {
    var val = e.target.value;
    var isValid = this.validate(val);
    this.setState({value: val, valid: isValid});
  }
  render() {
    // color border of the field  for input value
    var color = this.state.valid ? "green" : "red";

    return (
      <p>
          <label>Title:</label><br />
          <input type="text" value={this.state.value} onChange={this.onChange} style ={{borderColor: color}}/>
      </p>
    );
  }
}
class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var message = this.refs.messageField.state.value;
    var title = this.refs.titleField.state.value;
    if (this.refs.messageField.state.valid && this.refs.titleField.state.valid)
      alert("Title: " + title+" Message: " + message);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <TitleField value="Title" ref="titleField"/>
            <MessageField value="Message" ref="messageField"/>
            <input type="submit" value="Send" />
        </form>
    );
  }
}
module.exports = MessageForm;
