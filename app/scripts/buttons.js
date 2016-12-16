import React from 'react';
import $ from 'jquery';

module.exports = React.createClass({
	getInitialSate: function() {
		return {x: 0, y: 0};
	},
	handleShowHide: function(e) {
		e.preventDefault();
	},
	render: function() {
		return (
			<form className="buttons" onClick={this.handleShowHide}>
				<input className="ui-button ui-widget ui-corner-all" type="button" value="Show" />
			</form>
		);
	}
});
