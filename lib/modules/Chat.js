// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
const $helpers  = require('../Helpers');
const $User     = require('./User');
const $util     = require('util');

var HOST        = 'https://www.stream.me';
var ROUTES      = require('../Routes');

var Chat = function Chat (_userObject) {
  this.USER = _userObject;
};

Chat.prototype.getRoster = function () {
  var user = new $User(this.USER);
  var roster = $helpers.GetRequest($util.format('%s/%s/%s/rooms/user:%s:web/roster', HOST, ROUTES.chat.route, ROUTES.chat.version, user.getPublicId()));
  var list = [];
  for(var i = 0; i < roster.length; i++) {
    list.push(roster[i].username);
  }
  return list;
};

Chat.prototype.getMods = function () {
  var user = new $User(this.USER);
  var roster = $helpers.GetRequest($util.format('%s/%s/%s/rooms/user:%s:web/roster-audit?role=moderator', HOST, ROUTES.chat.route, ROUTES.chat.version, user.getPublicId()));
  var list = [];
  for(var i = 0; i < roster.length; i++) {
    list.push(roster[i].username);
  }
  return list;
};

exports = module.exports = Chat;
