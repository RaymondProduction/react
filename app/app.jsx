var ReactDOM = require('react-dom');
var React = require('react');
var MessageForm = require('./components/MessageForm.jsx');
/*
const messageList = {
    title: 'Main theme',
    messages: [
      {title: 'First news', text: 'Hi, It is test'},
      {title: 'Second news', text: 'Ok, How do you do?'}
    ]
}
*/
ReactDOM.render(
    <MessageForm  message="" title=""/>,
    document.getElementById("app")
)
