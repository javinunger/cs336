import React from 'react';
import $ from 'jquery';

import identityButtons from './buttons';
import identityImage from './image';
import { API_URL, POLL_INTERVAL } from './global';

module.exports = React.createClass({
	getInitialState: function() {
		return {data: []};
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
      data: coordinate,
    })
    .done(function(result){
  		  this.setState({data: result});
    }.bind(this))
    .fail(function(xhr, status, errorThrown) {
    		this.setState({data: coordinates});
        console.error(API_URL, status, errorThrown.toString());
    }.bind(this));
	},
  render: function() {
  	return (
    	<div className="identityContainer">
				<h1>"identityContainer render return"</h1>
      	<identityImage data={this.state.data}/>
				<identityButtons onCoordinateSubmit={this.handleCoordinateSubmit} />
      </div>
    );
	}
});
