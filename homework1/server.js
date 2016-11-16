var express = require('express');
var app = express();

var people = {
	22: ["Javin", 	"Unger", 	"11/11/1994"],
	10: ["Cotter", "Koopman",	"08/12/1995"]
}

function getSeniority(dateString) {
	var today = new Date();
	var startDate = new Date(dateString);
	var seniority = today.getFullYear() - startDate.getFullYear();
	var m = today.getMonth() - startDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < startDate.getDate()))
		seniority--;
	return seniority;
}

app.get('/people', function (req, res) {
	res.send(people);
});

app.get('/person/:id', function (req, res) {
	if (req.params.id in people) {
		res.json(people[req.params.id]);
	} else
		res.sendStatus(404);
});

app.get('/person/:id/:property', function (req, res) {
	if	(req.params.id in people) { 
		if (req.params.property == "name")
			res.json(people[req.params.id][0] + " " + people[req.params.id][1]);
		if (req.params.property == 'years')
			res.json(getSeniority(people[req.params.id][2]));
	} else
		res.sendStatus(404);
});

app.listen(1718, function () {
  console.log('Example app listening on port 1718!');
});