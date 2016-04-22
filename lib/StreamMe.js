// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md

const $util         = require('util');
const $helpers      = require('./Helpers');
const $Chat         = require('./modules/Chat');
const $Donate       = require('./modules/Donate');
const $User         = require('./modules/User');
const $Stats        = require('./modules/Stats');

var HOST            = 'https://www.stream.me';
var ROUTES          = require('./Routes');

var StreamMe = function StreamMe (_name) {
  if(typeof _name != 'string') {
    throw new Error('The name parameter must be a string.');
  }
  this.USER_NAME = _name;
  this.USER = $helpers.GetRequest($util.format('%s/%s/%s/%s/channel', HOST, ROUTES.user.route, ROUTES.user.version, this.USER_NAME.toLowerCase()));

  // Chargin' up the lazers...now...
  // TODO: Add archive
  this.Chat = new $Chat(this.USER);
  this.Donate = new $Donate(this.USER);
  this.User = new $User(this.USER);
  this.Stats = new $Stats(this.USER);
};

StreamMe.prototype.whoIsThis = function () {
  return this.USER_NAME;
};

StreamMe.prototype.ForceRefresh = function () {};

exports = module.exports = StreamMe;

exports.Live = function Livestreams () {
  var streams = $helpers.GetRequest($util.format('%s/%s/%s/streams', HOST, ROUTES.live.route, ROUTES.live.version));
  var data = [];
  for(var i = 0; i < streams._embedded.streams.length; i++) {
    var stream = {
      "username": streams['_embedded']['streams'][i]['username'],
      "info": {
        "rtmp": streams['_embedded']['streams'][i]['_links']['rtmpmp4'] ? streams['_embedded']['streams'][i]['_links']['rtmpmp4']['href'] : null,
        "thumbnail": streams['_embedded']['streams'][i]['_links']['thumbnail'] ? streams['_embedded']['streams'][i]['_links']['thumbnail']['href'] : null,
        "preview": streams['_embedded']['streams'][i]['_links']['preview'] ? streams['_embedded']['streams'][i]['_links']['preview']['href'] : null,
        "banner": streams['_embedded']['streams'][i]['_links']['banner'] ? streams['_embedded']['streams'][i]['_links']['banner']['href'] : null,
        "avatar": streams['_embedded']['streams'][i]['_links']['avatar'] ? streams['_embedded']['streams'][i]['_links']['avatar']['href'] : null
      }
    };
    data.push(stream);
  }

  return data;
};
