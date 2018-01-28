var React = require("react");
var connect = require("react-redux").connect;
var actions = require("./../actions.jsx");
import MessageForm from './MessageForm.jsx';
import MessageList from './MessageList.jsx';


class AppView extends React.Component {
    render() {
        return <div>
            <MessageForm addMessage={this.props.addMessage}/>
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
