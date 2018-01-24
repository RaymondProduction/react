var React = require('react');
class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    var message = props.message;
    var messageIsValid = this.validateMessage(message);
    var title = props.title;
    var titleIsValid = this.validateMessage(title);

    this.state = {message: message, title: title, messageValid: messageIsValid, titleValid : titleIsValid};

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validateMessage(message){
    return message.length>2;
  }
  validateTitle(title){
    return title.length >2;
  }
  onChangeMessage(e) {
    var val = e.target.value;
    var valid = this.validateMessage(val);
    this.setState({message: val, messageValid: valid});
  }
  onChangeTitle(e) {
    var val = e.target.value;
    var valid = this.validateTitle(val);
    this.setState({message: val, titleValid: valid});
  }
  handleSubmit(e) {
    e.preventDefault();
    alert("Title: " + this.state.message+" Message: " + this.state.message);
  }

  render() {
    // color border of the field  for input message
    var messageColor = this.state.messageValid ? "green" : "red";
    // color border of the field  for input title
    var titleColor = this.state.titleValid ? "green" : "red";

    return (
        <form onSubmit={this.handleSubmit}>
            <p>
                <label>Title:</label><br />
                <input type="text" value={this.state.title} onChange={this.onChangeTitle} style ={{borderColor: titleColor}}/>
            </p>
            <p>
                <label>Message:</label><br />
                <input type="text" value={this.state.message} onChange={this.onChangeMessage} style ={{borderColor: titleColor}}/>
            </p>
            <input type="submit" value="Send" />
        </form>
    );
  }
}
module.exports = MessageForm;
