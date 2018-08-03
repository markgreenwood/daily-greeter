/*
 * Handlers for snarky-hello
 */

// Dependencies
const helpers = require('./helpers');

const handlers = {};

handlers.hello = function(data, callback) {
  const acceptableMethods = ['post', 'get'];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._hello[data.method](data, callback);
  } else {
    callback(405);
  }
};

handlers._hello = {};

handlers._hello.post = function(data, callback) {
  console.log(data);
  // Check for required fields
  const name = data.payload.name ? data.payload.name : false;

  if (name) {
    // See if there's a special greeting for this day
    const specialGreeting = helpers.getSpecialGreeting(Date.now());
    const greeting = specialGreeting ? specialGreeting : 'Hello';

    callback(200, { greeting: greeting + ', ' + name + '!' });
  } else {
    callback(400, { Error: 'You didn\'t tell me your name' });
  }
};

module.exports = handlers;
