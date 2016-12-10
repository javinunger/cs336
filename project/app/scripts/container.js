import React from 'react';
import $ from 'jquery';

import identityButtons from './buttons';
import Image from './image';
import { API_URL, POLL_INTERVAL } from './global';

module.exports = React.createClass({
	getInitialState: function() {
		return {data: []};
	},
	loadCoordinatesFromServer: function() {
  	$.ajax({
    	url: API_URL,
      dataType: 'json',
      cache: false,
    })
    .done(function(result){
    	this.setState({data: result});
			console.log("GET request succeeded" + result);
    }.bind(this))
    .fail(function(xhr, status, errorThrown) {
    	console.error(this.props.url, status, errorThrown.toString());
    }.bind(this));
  },
  handleShowHide: function() {
		/*if 
  	var coordinates = this.state.data;
    
    this.setState({data: coordinates});
	*/},
	componentDidMount: function() {
		this.loadCoordinatesFromServer();
		setInterval(this.loadCoordinatesFromServer, POLL_INTERVAL);
	},
  render: function() {
  	return (
    	<div className="Container">
				<h1>Identity Quiz</h1>
      	<Image data={this.state.data}/>
      </div>
    );
	}
});
