import ReactDOM from'react-dom';
import React from 'react';

import MessageForm from './components/MessageForm.jsx';

// using ES6 modules
import { BrowserRouter, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom'

const active = {
    color: 'red',
    fontWeight: 'bold'
};
const style = {
     margin:'5px'
};
const phones =[
                {id: 1, name: "iPhone 7"},
                {id: 2, name: "Google Pixel"},
                {id: 3, name: "HTC U Ultra"}
            ];

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
        return (
            <div>
            <h2>Main</h2>
                <p>Match: {JSON.stringify(this.props.match)}</p>
                <p>Location {JSON.stringify(this.props.location)}</p>
                <p>Id: {this.props.match.params.id}</p>
                <p>Name: {new URLSearchParams(this.props.location.search).get("name")}</p>
                <p>Age: {new URLSearchParams(this.props.location.search).get("age")}</p>
            </div>
            );
    }
}
class PhoneList extends React.Component{
    render(){
        return <div>
                    <h2>Phones</h2>
                    <ul>
                    {
                        phones.map(function(item){
                            return <li key={item.id}>
                                     <NavLink to={`/products/${item.id}`}>{item.name}</NavLink>
                                   </li>
                        })
                    }
                </ul>
            </div>;
    }
}
class Tablet extends React.Component{
    render(){
        return <h3>Tablets</h3>;
    }
}
class ProductsId extends React.Component{
    render(){
        return <h2>Products id: {this.props.match.params.id}</h2>;
    }
}
class Products extends React.Component{
    render(){
        return <nav>
                <NavLink exact to="/products/phones" style={style} activeStyle={active}>Phones</NavLink>
                <NavLink to="/products/tablets" style={style} activeStyle={active}>Tablets</NavLink>
              </nav>;
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
                <Route exact path="/:id(\d+)" component={Main} />
                <Route path="/about/:id?/:name?" component={About} />
                <Route path="/products/:id(\d+)" component={ProductsId} />
                <Route exact path="/products" component={Products} />
                <Route path="/products/phones" component={PhoneList} />
                <Route path="/products/tablets" component={Tablet} />
                <Route path="/contact" children={()=><h2>Contact</h2>} />
                <Redirect from="/" to="/0" />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById("app")
)
