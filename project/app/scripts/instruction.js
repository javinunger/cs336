import React from 'react';
import $ from 'jquery';

import Image from './image';

module.exports = React.createClass({
	render: function() {
		var instruction = "kek";
		return (
			<div className="Instruction">
				{instruction}
			</div>
		);
	}
});