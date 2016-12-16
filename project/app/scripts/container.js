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
    	this.setState({data: result});
			var canvas = document.getElementById('imageCanvas');
			var context = canvas.getContext('2d');
			for (var i = 0; i <result.length; i++) {
				$.each (result, function(key, value) {
					context.beginPath();
					context.arc(value.x,value.y,3, 0, 2*Math.PI);
					context.fillStyle="#FF0000";
					context.fill();
					context.stroke();
				});
			}
    }.bind(this))
    .fail(function(xhr, status, errorThrown) {
    	console.error(this.props.url, status, errorThrown.toString());
    }.bind(this));
  },
	componentDidMount: function() {
		this.loadCoordinatesFromServer();
		setInterval(this.loadCoordinatesFromServer, POLL_INTERVAL);
	},
  render: function() {
  	return (
    	<div className="Container">
				<h1>Identity Quiz</h1>
				<Instruction/>
      	<Image data={this.state.data}/>
				<Buttons SHvalue={true}/>
      </div>
    );
	}
});
