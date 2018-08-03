const helpers = {};

helpers.parseJsonToObject = function(str) {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (e) {
    return {};
  }
};

helpers.getSpecialGreeting = function(date) {
  // May 4 - May the Fourth be with you

  // Dec 25 - Happy Festivus

  // March 14 - Pi day
  return null;
}

module.exports = helpers;
