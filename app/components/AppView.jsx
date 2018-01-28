var React = require("react");
var connect = require("react-redux").connect;
var actions = require("./../actions.jsx");
import MessageForm from './MessageForm.jsx';
import MessageList from './MessageList.jsx';


class AppView extends React.Component {

 
    render() {
  console.log(this.props);
        return <div>
            <MessageForm addPhone={this.props.addMassege}/>
            <MessageList {...this.props} />
    </div>
  }
};
 
function mapStateToProps(state) {
  return {
    messages: state.get("messages")
  };
}
 
module.exports = connect(mapStateToProps, actions)(AppView);

//<MessageList messages = {{text: 'tet',title:'6'}} />
