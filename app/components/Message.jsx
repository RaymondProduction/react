var React = require('react');
class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return <div style={{  border: '1px solid #ddd' , borderRadius: '4px', padding: '4px'}}>
            <h1>{this.props.title}</h1>
            <p style={{color: 'grey', fontFamaly: 'Verdana'}}>{this.props.text}</p>
            <button onClick={() => this.props.deleteMessage(this.props.id)}>delete</button>
          </div>
  }
}
// Default props
Message.defaultProps = {title: "News"};

module.exports = Message;
