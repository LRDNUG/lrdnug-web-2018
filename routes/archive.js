var express = require('express');
var router = express.Router();
var meetup = require('meetup-api')({
	key: 'f433f48e23582178527a3f2475e62'
});

var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  // https://api.meetup.com/topics.json?page=1
// var myEvents = [];
  meetup.getEvents({'group_id' : '19887327', 'status' : 'past', 'desc' : 'true'}, function(err, events) {
    // myEvents = events;
		// console.log(myEvents);
		//var myEvents = JSON.parse(events);
    // var output = events.getElementById('id');
    // eventstest.innerHTML = events;

		//var jsonObject = JSON.parse(events);

		console.log(events);

		res.render('index', { title: 'LRDNUG', events: events });
  });

  // res.render('index', { title: 'LRDNUG', events : myEvents});
});

module.exports = router;
