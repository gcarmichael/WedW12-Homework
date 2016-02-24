var React = require('react');

var AccountSelect = React.createClass({
  createOption: function(type){
    return(<option key={type} id={type} value={type}> {type} </option>);
  },

  handleChange: function(event){
    var newType = event.target.value;
    this.props.changeAccountType(newType);
  },

  render: function(){
    return(
      <div>
        <select onChange={this.handleChange}>
          {this.props.types.map(this.createOption)}
        </select>
      </div>
    );
  }
});

module.exports = AccountSelect;