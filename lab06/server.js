/* Lab06 - Basic HTTP methods & HTML/CSS forms
 *
 * Created by jbu2 for CS336, Fall 2016
 *
 * 6.1
 * Qa. Curl properly calls all HTTP methods.
 * I used the following successfully: 
 * curl [--head] localhost:3000/request
 * curl -X [PUT/POST/DELETE] localhost:3000/request '{"test":"10"}' -H 'Content-Type:
 * 	application/json'
 *
 * Qb. 400 - Bad request
 *
 * 6.2
 * Qa. GET and POST
 *
 * Qb. <form action="http://targeturl.com" method="get or post"></form>. The nature of POST and GET dictate that no data is modified.
 */

const express = require('express')
const app = express();
const http_status = require('http-status-codes');
const bodyParser = require('body-parser');

const HOST = "localhost";
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//GET
app.get('/request', function(req, res) {
	res.send("Got a GET request");
});

 //HEAD
app.head('/request', function(req, res) {
	res.send("You'll never see this haha");
});

//POST
app.post('/forms', function (req, res) {
  res.send('Got a POST request. <br>Name: ' + req.body.user_name +'<br> Email: ' + req.body.user_email +'<br> Message: ' + req.body.user_message+ '<br>');
});

//PUT
app.put('/request', function (req, res) {
  res.send('Got a PUT request: ' + req.body.test);
});

//DELETE
app.delete('/request', function (req, res) {
  res.send('Got a DELETE request: ' + req.body.test);
});

//Bad Request - send code 400 if it's anything but /request
app.all('*', function(req, res) {
	res.sendStatus(400);
});

app.listen(PORT, HOST, () => {
    console.log("listening on " + HOST + ":" + PORT + "...");
});