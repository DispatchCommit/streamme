// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md

var Donate = function Donate (_userObject) {
  this.USER = _userObject;
};

//this.getTopDonater = function getTopDonater () {};
//this.getTop5Donaters = function getTop5Donaters () {};

Donate.prototype.ForceRefresh = function (_user) {
  this.USER = _user;
};

exports = module.exports = Donate;
