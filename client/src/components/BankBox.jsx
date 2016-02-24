var React = require('react');
var sampleAccounts = require('../sample.json');
var Bank = require('../bank/bank.js');

var AccountSelect = require('./AccountSelect');
var AccountsList = require('./AccountsList');

var bank = new Bank();
for(var account of sampleAccounts){
  bank.addAccount(account);
}

var BankBox = React.createClass({
  getInitialState: function(){
    return {accounts: sampleAccounts, type: "All"};
  },

  changeAccountType: function(newType){
    this.setState({type: newType});
  },

  getAccountType: function(){
    return this.state.accounts.reduce(function(typeArray, account){
      if(!typeArray.includes(account.type)){
        typeArray.push(account.type);
      };
      return typeArray;
    }, ["All"]);
  },

  filterAccounts: function(){
    if(this.state.type == "All"){
      return this.state.accounts;
    } else {
      return bank.filteredAccounts(this.state.type);
    }
  },

  payInterest: function(){
    bank.payInterest();
    this.setState({accounts: bank.accounts});
  },

  deleteAccount: function(event){
    this.setState({accounts: bank.removeAccount(event)});
  },

  updateDetails: function(holderName, details){
    this.setState({accounts: bank.updateDetails(holderName, details)});
  },

  render: function(){
    return(
      <div>
        <h1> React Bank Box </h1>
        <AccountSelect types={ this.getAccountType() } changeAccountType={this.changeAccountType}> </AccountSelect>
        <button onClick={this.payInterest}>Pay Interest</button>
        <AccountsList type={this.state.type} accounts={ this.filterAccounts() } deleteAccount={this.deleteAccount} updateDetails={this.updateDetails}></AccountsList>
      </div>
      );
  }
});

module.exports = BankBox;