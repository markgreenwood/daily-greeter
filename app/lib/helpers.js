const helpers = {};

helpers.parseJsonToObject = function(str) {
  try {
    const obj = JSON.parse(str);
    return obj;
  } catch (e) {
    return {};
  }
};

helpers.getSpecialGreeting = function(theDate) {
  const month = new Date(theDate).getMonth();
  const date = new Date(theDate).getDate();

  console.log('Checking month=', month, ' date=', date);

  // May 4 - May the Fourth be with you
  if (month === 4 && date === 4) {
    return 'May the Fourth be with you';
  }

  // Dec 25 - Happy Festivus
  if (month === 11 && date === 25) {
    return 'Happy Festivus';
  }

  // March 14 - Pi day
  if (month === 2 && date === 14) {
    return 'Happy Pi Day';
  }

  if (month === 7 && date === 3) {
    return 'It was ' + new Date(theDate).toString() + ' a day like any other day';
  }
  return null;
}

module.exports = helpers;
