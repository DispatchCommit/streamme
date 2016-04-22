# StreamMe
This NPM module is made to help you interact with [StreamMe's](https://stream.me) different APIs in an easy way.

## Install
`$ npm install streamme`

## Usage
```javascript
var StreamMe = require('streamme');
var AwesomeUser = new StreamMe('AwesomeUser');

// Get the current follower count for AwesomeUser
console.log(AwesomeUser.Stats.getFollowers('human'));
```
## Further Explanation
There is more documentation provided [here on the Wiki](https://github.com/MatthewNPM/streamme/wiki).
