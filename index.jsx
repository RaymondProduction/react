const classH = "message";
const time = {
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  style: {
    color:'green',
    fontFamily:'Verdana'
  }
}
class Message extends React.Component {
    render() {
        return  <div>
                  <h1 className={classH}>I am using react </h1>
                  <p style={time.style}>Time: {time.hours} : {time.minutes}</p>
                </div>;
    }
}
// rendering element
ReactDOM.render(
    <Message></Message>,  // element, which we want to create
    document.getElementById("app")    // where we create this element
)
