var React = require('react');
var BlabsList = require('./List.jsx');

module.exports = React.createClass({
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function(){
    this.readBlabsFromAPI()
  },

  readBlabsFromAPI: function(){
    //readFromAPI takes two args: url, successFunction
    //below, the first arg is basically saying to go to either localhost:3030/blabs OR localhost:8080/blabs depending on the production environment
    //this is beacuse this.props.orgin determines which server prefix to use (3030 vs 8000) 
    this.props.readFromAPI(this.props.origin + '/blabs', function(blabs){
      //the successFunction uses Reqwest to hand back what was fetched from the server. In this case, all the blabs. Not sure if they're in an array or object. 
      this.setState({data: blabs});
    }.bind(this))
  },

  render: function(){
    return(
      <div className="blabs-view">
        <BlabsList data={this.state.data}/>
      </div>
    )
  }
})

