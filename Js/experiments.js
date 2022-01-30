const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let arr;
rl.question('', (answer) => {
  arr=answer.split()
  rl.close();
});
console.log(arr.split);