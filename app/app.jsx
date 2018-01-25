var ReactDOM = require('react-dom');
var React = require('react');

var MessageForm = require('./components/MessageForm.jsx');

// using ES6 modules
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class About extends React.Component{
    render(){
        return <h2>About website</h2>;
    }
}
class NotFound extends React.Component{
    render(){
        return <h2>Resource is not found</h2>;
    }
}

class Main extends React.Component{
    render(){
        return <h2>Main</h2>;
    }
}
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route path="/contact" children={()=><h2>Contact</h2>} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById("app")
)
