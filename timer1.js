/*
Implement an alarm clock / timer which will beep after a specified amount of time has passed.
The user can specify an unlimited number of alarms using command line arguments.

Example usage:
node timer1.js 10 3 5 15 9 

This will make it beep at:
3 seconds
5 seconds
9 seconds
10 seconds
15 seconds

No numbers are provided: It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
*/

function setTimer(time) {
  if (typeof time !== 'number' || time < 0) {
    return; // Ignore non-numbers and negative numbers
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
}

// Retrieve command line arguments starting from index 2
const args = process.argv.slice(2);

// Set timers for each valid argument
args.forEach((arg) => {
  const time = Number(arg);
  setTimer(time);
});
