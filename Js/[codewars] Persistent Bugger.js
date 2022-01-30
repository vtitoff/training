function persistence(num, count=0) {
  let num_str = ('' + num).split('');
  let multiply = Number(num_str[0]);
  if (num_str.length > 1) {
    for (i = 1; i < num_str.length; i++) {
      multiply = Number(num_str[i]) * multiply;
    }
    count++;
  }
  if(('' + multiply).length > 1) {
    num = multiply;
    return persistence(num, count);
  } else{
    return count;
  }
}
let a = persistence(25);
console.log(a);






// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number