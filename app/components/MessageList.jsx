var React = require('react');
var SearchPlugin = require('./SearchPlugin.jsx');
var Message = require('./Message.jsx');


class MessageList extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
    var i = 0;
     console.log(this.props.messages);
     this.props.messages.map(item=>{
      console.log(item.get('text'));
     })
    return <div>
        {this.props.messages.map(item =>
          <Message key={item.get('text')}
                    text={item.get('text')}
                    title={item.get('title')}
                    deleteMessage={this.props.deleteMessage}
          />
        )}
      </div>
  }
    // return(
    //   <div>
    //       {
    //           this.props.messages.map(function(item){
    //               return <Message key= {i++} text={item.get('text')} title={item.get('title')} deleteMessage={this.props.deleteMessage}/>
    //           })
    //       }
    //   </div>);
    // Each child in an array or iterator should have a unique "key" prop.
 //}

}

module.exports = MessageList;
