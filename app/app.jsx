var ReactDOM = require('react-dom');
var React = require('react');

var MessageForm = require('./components/MessageForm.jsx');

// using ES6 modules
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const active = {
    color: 'red',
    fontWeight: 'bold'
};
const style = {
     margin:'5px'
};

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
class Phone extends React.Component{
    render(){
        return <h3>Phones</h3>;
    }
}
class Tablet extends React.Component{
    render(){
        return <h3>Tablets</h3>;
    }
}
class Products extends React.Component{
    render(){
        return <h2>Products</h2>;
    }
}
class Nav extends React.Component{
    render(){
        return <nav>
                <NavLink exact to="/" style={style} activeStyle={active}>Main</NavLink>
                <NavLink to="/about" style={style} activeStyle={active}>About</NavLink>
                <NavLink to="/products" style={style} activeStyle={active}>Products</NavLink>
              </nav>;
    }
}
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/products" component={Products} />
                <Route path="/contact" children={()=><h2>Contact</h2>} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("app")
)
