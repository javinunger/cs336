/**
 * This implements some examples using jQuery and AJAX.
 *
 * Taken from https://github.com/cs336/code/blob/master/unit07-ajax/server.js
 */

const express = require("express")
const app = express();
const http_status = require("http-status-codes");
const bodyParser = require("body-parser")

const HOST = "localhost";
const PORT = 3000;

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.send("Hello, Lab 7!");
});

app.get("/fetch", function(req, res) {
	if(req.query.name)
    res.send({"content" : req.query.name});
});

app.listen(PORT, HOST, () => {
    console.log("listening on " + HOST + ":" + PORT + "...");
});