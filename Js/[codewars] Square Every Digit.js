// function squareDigits(num){
//   let string_num=''+num;
//   let sum=[];
//   for(item of string_num){
//     sum.push(String((Number(item)**2)));
//   }
//   let answer=Number(sum.join(''));
//   return answer;
// }

// squareDigits(9414);



function squareDigits(num){
  let arr=num.toString().split('').map(function val(int){
    return int*int;
  })
  let answer=Number(arr.join(''));
  return answer;
}

squareDigits(9414);






// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 9**2 is 81 and 1**2 is 1.

// Note: The function accepts an integer and returns an integer