const $requestSync  = require('sync-request');

/**
 * Simplifies the requesting with a JSON object response and error handling.
 *
 * @param   string _url
 * @return  object
 */
exports.GetRequest = function GetRequest (_url) {
  var request = $requestSync('GET', _url);
  if (request.statusCode === 400) {
    throw new Error('The request returned with a 404.');
  }
  try {
    return JSON.parse(request.getBody());
  } catch (exception) {
    throw new Error('There was an error when requesting the page.');
  }
}
