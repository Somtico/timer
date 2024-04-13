const args = process.argv;
let newArr = args.slice(2).map(Number);


const alarmClock = (array) => {
  for (const num of array) {
    if (num > 0 && !isNaN(num)) {
      setTimeout(() => {
        process.stdout.write("\x07");
        // process.stdout.write(`At ${num} seconds: Beep!\n`);
      }, num * 1000);
    }
  }
};

alarmClock(newArr);
