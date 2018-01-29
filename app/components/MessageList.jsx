var React = require('react');
var SearchPlugin = require('./SearchPlugin.jsx');
var Message = require('./Message.jsx');


class MessageList extends React.Component {
  constructor(props){
      super(props);
      this.state = { messages: this.props.messages};
      this.filterList = this.filterList.bind(this);
  }
  filterList(text){
      var filteredList = this.props.messages.filter(function(item){
          return item.get('text').toLowerCase().search(text.toLowerCase())!== -1;
      });
      // update state
      this.setState({messages: filteredList});
  }
  // when change props, for example as add message
  componentWillReceiveProps(props){
      this.setState({ messages: props.messages})
  }

  render(){
    var i=0;
    return <div>
        <SearchPlugin filter={this.filterList}/>
        {this.state.messages.map(item =>
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
