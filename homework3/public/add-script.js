/*Script for adding people to people.json via HTML form, adapted from: 
 * http://jqfundamentals.com/chapter/ajax-deferreds
 *
 * Created and adapted by Javin Unger for CS336, Fall 2016
 */
$( 'form' ).submit(function( event ) {
	event.preventDefault();

	var form = $( this );

	$.ajax({
		type: 'POST',
		url: '/people',
		data: form.serialize(),
		dataType: 'json',
		success: function( result ) {
			console.log( "Request succeeded!" );
			$(".feedback").html("Person added!");
		},
		error: function( req, status, err ) {
			console.log('Something went wrong: ', status, err);
			$(".feedback").html("Person could not be added.");
		}
	});
});