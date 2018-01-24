var React = require('react');
var SearchPlugin = require('./SearchPlugin.jsx');
var Message = require('./Message.jsx');


class MessageList extends React.Component {
  constructor(props){
      super(props);
      this.state = { messages: this.props.data.messages};

      this.filterList = this.filterList.bind(this);
  }
  // filtering messages
  filterList(text){
      var filteredList = this.props.data.messages.filter(function(item){
          return item.text.toLowerCase().search(text.toLowerCase())!== -1;
      });
      // update state
      this.setState({messages: filteredList});
  }
  render(){
    var i = 0;
    return(
      <div>
          <h2>{this.props.data.title}</h2>
            <SearchPlugin filter={this.filterList}/>
          {
              this.state.messages.map(function(item){
                  return <Message key= {i++} text={item.text} title={item.title} />
              })
          }
      </div>);
    // Each child in an array or iterator should have a unique "key" prop.
  }

}

module.exports = MessageList;
