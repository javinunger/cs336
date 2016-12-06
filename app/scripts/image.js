/*
$( "canvas" ).click(function( event ) {
  var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  $( "span #first" ).text( "( event.pageX, event.pageY ) : " + pageCoords );
  $( "span #last" ).text( "( event.clientX, event.clientY ) : " + clientCoords );
});
*/

/*
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
	}
*/