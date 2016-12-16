import React from 'react';
import $ from "jquery";


module.exports = React.createClass({
    render: function() {
        return (
          <div className="Image">
              <img id='imageOnCanvas' src="https://raw.githubusercontent.com/javinunger/cs336/master/project/materials/globe.png"/>
              <canvas id="imageCanvas" width="700" height="450"></canvas>
          </div>
        );
    }
});
