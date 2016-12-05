import React from 'react';
import $ from 'jquery';

module.exports = React.createClass({
	render: function() {
		//if first time thru
		return (
			<form className="buttons" onSubmit={this.handleSubmit}>
				<input className="ui-button ui-widget ui-corner-all" type="submit" value="Restart" />
			</form>
		);
		/*//if done w/ first time (to see all results)
		return (
			<form className="buttons" onSubmit={this.handleSubmit}>
				<input className="ui-button ui-widget ui-corner-all" type="submit" value="Results" />
			</form>
		);*/
	}
});