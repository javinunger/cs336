import React from 'react';
import $ from 'jquery';

module.exports = React.createClass({
	render: function() {
		var instruction = "Where in the world would you most want to go?";
		return (
			<div className="Instruction">
				{instruction}
			</div>
		);
	}
});