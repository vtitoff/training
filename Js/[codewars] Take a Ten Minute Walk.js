function isValidWalk(walk) {
  let x=0;
  let y=0;
  let minutes=0;
  for(let i of walk){
    switch(i){
      case 'n':
        y+=1;
        break;
      case 's':
        y-=1
        break;
      case 'w':
        x-=1;
        break;
      case 'e':
        x+=1;
        break;
    }
    minutes+=1;
  }
  if(x===0 && y===0 && minutes===10){
    return true
  }
  return false
}
let a=isValidWalk(['n','n','n','s','n','s','n','s','n','s']);
console.log(a);













// You live in the city of Cartesia where all roads are laid out in a perfect grid. 
//You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
//The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button
// it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
//You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, 
//so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
//(you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
//It will never give you an empty array (that's not a walk, that's standing still!).
























// function duplicateEncode(word) {
//   return word.toLowerCase().split('').map(function(a, i, w){
//     return w.indexOf(a)==w.lastIndexOf(a)? '(' : ')'
//   }).join('')
// }
