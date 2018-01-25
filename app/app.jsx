import ReactDOM from'react-dom';
import React from 'react';

import MessageForm from './components/MessageForm.jsx';

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
        // get params
        const id = this.props.match.params.id;
        const name = this.props.match.params.name;
        return <h2>id: {id}  Name: {name}</h2>;
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
        return <h2>Products id: {this.props.match.params.id}</h2>;
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
// ? - optional parameters
// (\d+) - the regular expression corresponds to one digit or several digits
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Nav />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/about/:id?/:name?" component={About} />
                <Route path="/products/:id(\d+)" component={Products} />
                <Route path="/products/phones" component={Phone} />
                <Route path="/products/tablets" component={Tablet} />
                <Route path="/contact" children={()=><h2>Contact</h2>} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("app")
)
