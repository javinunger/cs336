/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Refactored for use with MongoDB/mLab by Javin Unger for cs336, Fall 2016
 */

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var MongoClient = require('mongodb').MongoClient

var db;

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/people', function(req, res) {
    db.collection("people").find({}).toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
    });
});

app.post('/api/people', function(req, res) {
    var newPerson = {
        id: Date.now(),
        fname: req.body.fname,
        lname: req.body.lname,
				bdate: req.body.bdate
    };
    db.collection("people").insertOne(newPerson, function(err, result) {
        if (err) throw err;
        db.collection("people").find({}).toArray(function(err, docs) {
            if (err) throw err;
            res.json(docs);
        });
    });
});

app.route('/person/:id')
	.get(function (req, res) {
		db.collection("people").find( {id: req.params.id} ).toArray(function(err, docs) {
      if (err) throw err;
			res.json(docs);
		})
	})
	.post(function (req, res) {
		db.collection("people").find( {id: req.params.id} ).toArray(function(err, docs) {
	    if (err) throw err;
			var new_id = req.params.id;
			var newPerson = {
				id: new_id,
				fname: req.body.fname,
				lname: req.body.lname,
				bdate: req.body.bdate,
			};
			db.collection("people").insertOne(newPerson);
		})
	})
	.delete(function (req, res) {
		db.collection("people").find({}).toArray(function(err, docs) {
	    if (err) throw err;
			db.collection("people").remove( {id: new_id} );
		})
	});

app.get('/person/:id/:property', function (req, res) {
	db.collection("people").find({ id: req.params.id }).toArray(function(err, docs) {
	  if (err) throw err;
		if (req.params.property == "name")
			res.json(docs.fname + " " + docs.lname);
		if (req.params.property == 'years')
			res.json(getSeniority(docs.bdate));
		else
			res.sendStatus(404);
	})
});

app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

// This assumes that the MongoDB password has been set as an environment variable.
var mongoURL = 'mongodb://cs336:' +
	       process.env.MONGO_PASSWORD +
	       '@ds011495.mlab.com:11495/jbu2-cs336';
MongoClient.connect(mongoURL, function(err, dbConnection) {
    if (err) throw err;
    db = dbConnection;
});

//Non-routing methods
function getSeniority(dateString) {
	var today = new Date();
	var startDate = new Date(dateString);
	var seniority = today.getFullYear() - startDate.getFullYear();
	var m = today.getMonth() - startDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < startDate.getDate()))
		seniority--;
	return seniority;
}