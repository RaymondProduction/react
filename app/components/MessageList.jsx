var React = require('react');
var SearchPlugin = require('./SearchPlugin.jsx');
var Message = require('./Message.jsx');


class MessageList extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
    var i=0;
    return <div>
        {this.props.messages.map(item =>
          <Message  id={item.get('id')}
                    key={i++}
                    text={item.get('text')}
                    title={item.get('title')}
                    deleteMessage={this.props.deleteMessage}
          />
        )}
      </div>
  }
}

module.exports = MessageList;
