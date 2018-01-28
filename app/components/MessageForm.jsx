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
  }
    onClick() {
    if (this.refs.messageField.value !== "") {
      var text = this.refs.messageField.state.value;
      var title = this.refs.titleField.state.value;
      return this.props.addMessage({title: title, text: text});
    }
  }

  render() {
    return (
        <div>
            <TitleField value="Title" ref="titleField"/>
            <MessageField value="Message" ref="messageField"/>
            <button onClick = {this.onClick.bind(this)}>Add</button>
        </div>
    );
  }
}
module.exports = MessageForm;
