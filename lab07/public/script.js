//Script for Exercise 7.2 and 7.3
$( document ).ready(function() {

	$("body").append( "<button class='ui-button ui-widget ui-corner-all'>Get Data</button>" );
	$("body").append( "<p></p>");

	$("button").click(function() {
		$.ajax({
			url: "/fetch",
			type: "GET",
			data: {
				name: "lab7-data"
			}
		})
		.done(function (result) {
			console.log("Request succeeded");
			$("p").html("<p> Data: " + result.content + "</p>");
		})
		.fail(function(xhr, status, errorThrown) {
			console.log("Request failed");
			$("p").html("<p> No data yet </p>");
		})
	});

});