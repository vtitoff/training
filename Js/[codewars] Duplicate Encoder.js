function duplicateEncode(word) {
  let massive=[];
  let iskl=['(',')'];
  for (i = 0; i < word.length; i++) {
    if (iskl.includes(word[i])){
      regexp = new RegExp('\\'+word[i], 'gi');
    }else{
      regexp = new RegExp(word[i], 'gi');
    }
    let w = word.match(regexp);
    if (w.length > 1) {
      massive.push(')');
    } else {
      massive.push('(');
    }
  }
  return massive.join('');
}

// function duplicateEncode(word) {
//   return word.toLowerCase().split('').map(function(a, i, w){
//     return w.indexOf(a)==w.lastIndexOf(a)?'(':')'
//   }).join('')
// }



let a = duplicateEncode('recede');
console.log(a);





// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!