var _meetup = require('meetup-api')();
var _proxy = require('proxy-agent')

_meetup.proxy = 'http://149.202.94.120:3128';

_meetup.findLocations
