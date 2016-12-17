/* React component for the instruction text
 * Creates a class with text that prompts the user to click on a world map.
 * Rendered by container.js
 *
 * Written by Cotter Koopman and Javin Unger for CS336, Fall 2016
 */

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
