// Coding standard for this project defined @ https://github.com/MatthewSH/standards/blob/master/JavaScript.md

var Stats = function Stats (_userObject) {
  this.USER = _userObject;
};

Stats.prototype.getFollowers = function (_type) {
  if (!_type) {
    throw new Error('You must give me a type (raw or human) for me to be able to give you some followers.');
  }
  switch (_type.toLowerCase()) {
    case 'raw':
      return this.USER.stats.raw.followers;
      break;
    case 'human':
      return this.USER.stats.human.followers;
      break;
  }
};

Stats.prototype.getSubscribers = function (_type) {
  if (!_type) {
    throw new Error('You must give me a type (raw or human) for me to be able to give you some subscribers.');
  }
  switch (_type.toLowerCase()) {
    case 'raw':
      return this.USER.stats.raw.subscribers;
      break;
    case 'human':
      return this.USER.stats.human.subscribers;
      break;
  }
};

Stats.prototype.getViews = function (_type) {
  if (!_type) {
    throw new Error('You must give me a type (raw or human) for me to be able to give you some views.');
  }
  switch (_type.toLowerCase()) {
    case 'raw':
      return this.USER.stats.raw.totalViews;
      break;
    case 'human':
      return this.USER.stats.human.totalViews;
      break;
  }
};

Stats.prototype.ForceRefresh = function (_user) {
  this.USER = _user;
};

exports = module.exports = Stats;
