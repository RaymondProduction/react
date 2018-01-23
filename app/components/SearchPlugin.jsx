var React = require('react');

class SearchPlugin extends React.Component {
  constructor(props){
      super(props);
      this.textChanged = this.textChanged.bind(this);
  }

  textChanged(e){
    var text = e.target.value.trim();  // It is deleting spaces
    this.props.filter(text); // Important! We get the function (filterList)
  }

  render(){
    return (
      <input placeholder="Search" onChange={this.textChanged} />
    )
  }
}

module.exports = SearchPlugin;
