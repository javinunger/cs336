import React from 'react';
import $ from 'jquery';

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
     }.bind(this))
     .fail(function(xhr, status, errorThrown) {
     		console.error(this.props.url, status, errorThrown.toString());
     }.bind(this));
	},
  handleCoordinateSubmit: function(coordinate) {
  	var coordinates = this.state.data;
    coordinate.id = Date.now();
    var newCoordinates = coordinates.concat([coordinate]);
    this.setState({data: newCoordinates});
    $.ajax({
  	  url: API_URL,
      dataType: 'json',
      type: 'POST',
      data: comment,
    })
    .done(function(result){
  		  this.setState({data: result});
    }.bind(this))
    .fail(function(xhr, status, errorThrown) {
    		this.setState({data: comments});
        console.error(API_URL, status, errorThrown.toString());
    }.bind(this));
	},
  componentDidMount: function() {
  	this.loadCoordinatesFromServer();
  	setInterval(this.loadCoordinatesFromServer, POLL_INTERVAL);
  },
  render: function() {
  	return (
    	<div className="Container">
      	<Image data={this.state.data} />
      </div>
    );
	}
});
