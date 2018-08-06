/*
 * Handlers for snarky-hello
 */

// Dependencies
const helpers = require('./helpers');

const handlers = {};

handlers.hello = function(data, callback) {
  const acceptableMethods = ['post'];
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
  const name = data.payload.name ? data.payload.name : 'nameless person';
  const moreStuff = data.payload.name ? '' : ' You have to tell me your name if you want me to talk to you.';

  if (name) {
    // See if there's a special greeting for this day
    const greeting = helpers.getGreeting(name, Date.now());

    callback(200, { greeting: greeting + ', ' + name + '!' + moreStuff });
  } else {
    callback(400, { Error: 'Bad request' });
  }
};

handlers.notFound = function(data, callback) {
  callback(404);
};

module.exports = handlers;
