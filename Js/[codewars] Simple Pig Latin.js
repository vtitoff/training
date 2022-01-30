function pigIt(str) {
  str = str.split(' ');
  massive=[]   
  for (i of str) {      
    i = i.split('');
    if (!['!', '?', '.', ','].includes(i[0])) {
      i.push(i[0]);
      i.shift(); 
      i.push('ay');
    }
    i = i.join('');  
    massive.push(i)
  }
  return massive.join(' ');
}

let a = pigIt('Oay emporatay oay oresmay !ay');
console.log(a);

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !
