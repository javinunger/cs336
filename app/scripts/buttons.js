import React from 'react';
import $ from 'jquery';

module.exports = React.createClass({
	getInitialSate: function() {
		return {x: 0, y: 0};
	},
	handleShowHide: function(e) {
		e.preventDefault();
		var theButton = ".ui-button ui-widget ui-corner-all";
		var coordinates = this.state.data;
	
		/*if (".buttons:first-child").props.value*/
		if (($theButton).props.value = "Show") $(theButton).props.value = "Hide";
		else $(theButton).props.value = "Show";

		for( var i = 0; i < result.length; i++) {
			$(".Image").drawImage('http://lorempixel.com/5/5/',coordinates[i][1],coordinates[i][2]);
		}
	},
	render: function() {
		return (
			<form className="buttons" onClick={this.handleShowHide}>
				<input className="ui-button ui-widget ui-corner-all" type="button" value="Show" />
			</form>
		);
	}
});
