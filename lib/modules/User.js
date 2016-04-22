// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md

var User = function User (_userObject) {
  this.USER = _userObject;
};

User.prototype.isLive = function () {
  return this.USER._embedded.streams[0].active;
};

User.prototype.getDisplayName = function () {
  return this.USER.displayName;
};

User.prototype.getPublicId = function () {
  return this.USER.userPublicId;
};

exports = module.exports = User;
