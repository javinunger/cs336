/*Script for getting people to people.json via HTML form, adapted from: 
 * http://jqfundamentals.com/chapter/ajax-deferreds
 *
 * Created and adapted by Javin Unger for CS336, Fall 2016
 */
$( 'form' ).submit(function( event ) {
	event.preventDefault();
	var input_id = document.getElementById('id').value; //Pulls data out of the text field
	var route = '/person/' + input_id;									//and concatenates it to the route
	var form = $( this );																//to be specified as the AJAX url
																											
	$.ajax({
		type: 'GET',
		url: route,
		dataType: 'json',
		success: function( result ) {
			console.log( "Request succeeded!");
			$(".result").html("<p>" + result.content + "</p>");
		},
		error: function( req, status, err ) {
			console.log('Something went wrong: ', status, err);
			$(".result").html("<p>" + "Person could  not be retrieved." + "</p>");
		}
	});
});