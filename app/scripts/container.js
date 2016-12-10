import React from 'react';
import $ from 'jquery';

import Instruction from './instruction';
import Buttons from './buttons';
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
			console.log("Coordinates loaded");
    	this.setState({data: result});
    }.bind(this))
    .fail(function(xhr, status, errorThrown) {
    	console.error(this.props.url, status, errorThrown.toString());
    }.bind(this));
  },
	componentDidMount: function() {
		console.log("Component mounted");
		this.loadCoordinatesFromServer();
		setInterval(this.loadCoordinatesFromServer, POLL_INTERVAL);
	},
  render: function() {
  	return (
    	<div className="Container">
				<h1>Identity Quiz</h1>
				<Instruction/>
      	<Image data={this.state.data}/>
				<Buttons/>
      </div>
    );
	}
});
