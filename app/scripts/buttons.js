import React from 'react';
import $ from 'jquery';

module.exports = React.createClass({
	getInitialState: function() {
		return {visibility: "hidden"}
	},
	handleShowHide: function(e) {
		e.preventDefault();
		if (this.state.visibility === "hidden") {
			this.setState({visibility: "visible"});
		} else {
			this.setState({visibility: "hidden"});	
		}
		$("canvas").css({"visibility": this.state.visibility});
	},
	render: function() {
		return (
			<form className="buttons" onClick={this.handleShowHide}>
				<input id="shButton" className={this.state.visibility} type="button" value="Show/Hide" />
			</form>
		);
	}
});
