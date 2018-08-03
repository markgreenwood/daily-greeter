/*
 * Handlers for snarky-hello
 */

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
    callback(200, { greeting: 'Hello ' + name + '!' });
  } else {
    callback(400, { Error: 'Not going to tell me your name, eh?' });
  }
};

module.exports = handlers;
