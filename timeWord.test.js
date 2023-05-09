function timeToWords(timeStr) {
  // split the time string into hours and minutes
  const [hours, minutes] = timeStr.split(':');

  // convert the hours and minutes to integers
  const hourInt = parseInt(hours, 10);
  const minuteInt = parseInt(minutes, 10);

  // define an array of words for the hours
  const hoursWords = [
    'midnight',
    'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight',
    'nine', 'ten', 'eleven', 'noon'
  ];

  // define an array of words for the minutes
  const minutesWords = [
    '', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight',
    'nine', 'ten', 'eleven', 'twelve',
    'thirteen', 'fourteen', 'quarter',
    'sixteen', 'seventeen', 'eighteen',
    'nineteen', 'twenty', 'twenty-one',
    'twenty-two', 'twenty-three', 'twenty-four',
    'twenty-five', 'twenty-six', 'twenty-seven',
    'twenty-eight', 'twenty-nine', 'half'
  ];

  // determine whether it's morning or afternoon/evening
  const period = hourInt >= 12 ? 'pm' : 'am';

  // convert from 24-hour to 12-hour format
  const hour12 = hourInt % 12 || 12;

  // construct the words for the time
  let timeWords = '';
  if (minuteInt === 0) {
    timeWords = `${hoursWords[hourInt]} ${period}`;
  } else if (minuteInt < 30) {
    timeWords = `${minutesWords[minuteInt]} past ${hoursWords[hourInt]} ${period}`;
  } else if (minuteInt === 30) {
    timeWords = `half past ${hoursWords[hourInt]} ${period}`;
  } else {
    const minutesRemaining = 60 - minuteInt;
    const nextHour = hour12 === 12 ? 1 : hour12 + 1;
    timeWords = `${minutesWords[minutesRemaining]} to ${hoursWords[nextHour]} ${period}`;
  }

  return timeWords;
}
