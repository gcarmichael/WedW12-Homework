var React = require('react');

var AccountDisplay = React.createClass({
  getInitialState: function(){
    return {details: ""};
  },


  handleClick: function(event){
    var removed = event.target.value;
    this.props.deleteAccount(removed);
  },

  handleForm: function(event){
    event.preventDefault();
    var details = this.state.details;
    // this.setState({details: details});
    this.props.updateDetails(this.props.account.owner, details);
  },

  handleDetailChange: function(event){
    this.setState({details: event.target.value})
  },

  render: function(){
    if(this.props.account){
      return(
        <div>
          <h3>Name: {this.props.account.owner}</h3>
          <h3>Type: {this.props.account.type}</h3>
          <h3>Cash: £{ Number(this.props.account.amount).toLocaleString() }</h3>
          <p>Details: {this.props.account.details}</p>
          <form onSubmit={this.handleForm}>
            <input type="text" placeholder="Add details" value={this.state.details} onChange={this.handleDetailChange}></input>
            <input type="submit"></input>
          </form>
          <button onClick={this.handleClick} value={this.props.account.owner}>Remove Account</button>
        </div>
      );
    } else {
      return(
        <div style={{display: "none"}}>
        </div>
      )
    }
  }
});

module.exports = AccountDisplay;