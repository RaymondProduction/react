var React = require('react');
class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {message: ""};

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    var val = e.target.value;
    this.setState({message: val});
}

  handleSubmit(e) {
    e.preventDefault();
    alert("Message: " + this.state.message);
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <p>
                <label>Message:</label><br />
                <input type="text" value={this.state.name} onChange={this.onChange}/>
            </p>
            <input type="submit" value="Send" />
        </form>
    );
  }
}
ReactDOM.render(
    <MessageForm />,
    document.getElementById("app")
)
module.exports = MessageForm;
