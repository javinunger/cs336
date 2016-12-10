import React from 'react';
import $ from "jquery";


module.exports = React.createClass({
    render: function() {
        return (
          <div className="Image">
              <img id='imageOnCanvas' src="http://lorempixel.com/700/450/"/>
              <canvas id="imageCanvas" width="700" height="450"></canvas>
              <p>^This canvas is being rendered by the image component, which is being rendered by container component. (The image is behind the canvas! Check the console for coordinate-click output.)</p>
          </div>
        );
    }
});
