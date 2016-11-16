/* Modelled after facebook's React tutorial server.js
 *
 * Modified by Javin Unger for CS336, Fall 2016
 */

//Methods

function getSeniority(dateString) {
	var today = new Date();
	var startDate = new Date(dateString);
	var seniority = today.getFullYear() - startDate.getFullYear();
	var m = today.getMonth() - startDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < startDate.getDate()))
		seniority--;
	return seniority;
}

//Server

var fs = require('fs');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

/*
var people = {
	22: ["Javin", 	"Unger", 	"11/11/1994"],
	10: ["Cotter", "Koopman",	"08/12/1995"]
}
*/

var PEOPLE_FILE = path.join(__dirname, 'data/people.json');
var HOST = "localhost";
var PORT = 3000;

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
	res.send("Hello, Homework 2! Go to '/add.html' and '/get.html'!");
});

app.get('/people', function (req, res) {
	fs.readFile(PEOPLE_FILE, function(err, data) {
		if (err) 
			{console.error(err); process.exit(1);}
		res.json(JSON.parse(data));
	});
});

app.post('/people', function (req, res) {
	fs.readFile(PEOPLE_FILE, function(err, data) {
		if (err)
			{console.error(err); process.exit(1);}
		var people = JSON.parse(data);
		var newPerson = {
			id: Date.now(),
			fname: req.body.firstName,
			lname: req.body.lastName,
			date: req.body.birthDate,
		};
		people.push(newPerson);
		fs.writeFile(PEOPLE_FILE, JSON.stringify(people, null, 4), function(err) {
			if (err) 
				{console.error(err); process.exit(1);}
			res.json(people);
		});
	});
});

app.route('/person/:id')
	.get(function (req, res) {
		fs.readFile(PEOPLE_FILE, function(err, data) {
			if (err)
				{console.error(err); process.exit(1);}
			var readData = JSON.parse(data);
			var count = Object.keys(readData).length;
			for (i = 0; i < count; i++) {
				if (readData[i].id == req.params.id) {
					res.json({"content" : JSON.stringify(readData[i])});
				}
			}
		})
	})
	.post(function (req, res) {
		fs.readFile(PEOPLE_FILE, function(err, data) {
			if (err)
				{console.error(err); process.exit(1);}
			var people = JSON.parse(data);
			var count = Object.keys(readData).length;
			for (i = 0; i < count; i++) {
				if (readData[i].id == req.params.id) {
					var new_id = readData[i].id;
				}
			}
			var newPerson = {
				id: new_id,
				fname: req.body.firstName,
				lname: req.body.lastName,
				date: req.body.birthDate,
			};
			people.push(newPerson);
			fs.writeFile(PEOPLE_FILE, function(err, data) {
				if (err)
					{console.error(err); process.exit(1);}
				res.json(people);
			})
		})
	})
	.delete(function (req, res) {
		fs.readFile(PEOPLE_FILE, function(err, data) {
			if (err)
				{console.error(err); process.exit(1);}
			var people = JSON.parse(data);
			var count = Object.keys(readData).length;
			for (i = 0; i < count; i++) {
				if (readData[i].id == req.params.id) {
					var new_id = readData[i].id;
				}
			}
			delete people[new_id];
		})
	});

app.get('/person/:id/:property', function (req, res) {
		fs.readFile(PEOPLE_FILE, function(err, data) {
			if (err)
				{console.error(err); process.exit(1);}
			var readData = JSON.parse(data);
			var count = Object.keys(readData).length;
			for (i = 0; i < count; i++) {
				if (readData[i].id == req.params.id) {
					if (req.params.property == "name")
						res.json(readData[i].fname + " " + readData[i].lname);
					if (req.params.property == 'years')
						res.json(getSeniority(readData[i].bdate));
					else
						res.sendStatus(404);
				}
			}
		})
});

app.listen(PORT, HOST, () => {
    console.log("Listening on " + HOST + ":" + PORT + "...");
});

//Bad Request - send code 400 if it's anything but /request
app.all('*', function(req, res) {
	res.sendStatus(400);
});