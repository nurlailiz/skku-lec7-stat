#!/usr/bin/env node

const lib = require("./lib");

if (process.argv.length <= 3){                  // if the number of arg less then 4
    console.log("Insufficient parameter!");     // print our "Insufficient parameter!"
    process.exit(1);
}

let command = process.argv[2];

let numbers = process.argv.slice(3, process.argv.length).map((n) => parseFloat(n));

if (numbers.some((n) => isNaN(n))){             // if 3 arg for number is not numbers
    console.log("Some arguments are not numbers!");
    process.exit(1);
}

let result;
switch (command) {
    case "sum":
        result = lib.sum(numbers);
        break;
    case "avg":
        result = lib.avg(numbers);
        break;
    case "max":
        result = lib.max(numbers);
        break;
    default:
        console.log("Wrong command!");
        process.exit(1);
}

console.log(result);
