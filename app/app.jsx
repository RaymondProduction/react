var ReactDOM = require('react-dom');
var React = require('react');
var MessageList = require('./components/MessageList.jsx');

const messageList = {
    title: 'Main theme',
    messages: [
      {title: 'First news', text: 'Hi, It is test'},
      {title: 'Second news', text: 'Ok, How do you do?'}
    ]
}

ReactDOM.render(
    <MessageList data={messageList} />,
    document.getElementById("app")
)
