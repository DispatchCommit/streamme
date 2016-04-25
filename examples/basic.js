// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md
const $StreamMe   = require('../');
var node          = new $StreamMe('node');
var isLive        = node.User.isLive() ? 'live' : 'not live';

console.log('node is ' + isLive);
console.log('node\'s profile has been viewed ' + node.Stats.getViews('human') + ' times.');
