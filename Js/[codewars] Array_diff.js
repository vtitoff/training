function arrayDiff(a, b) {
  let s=[];
  for(let item of a){
    if (b.includes(item)){
      'None'
    }else{
      s.push(item);
    }
  }
  return s;
}

let a=[1,8,2];
let b=[];
c=arrayDiff(a,b);
console.log(c);


// function arrayDiff(a, b) {
//   return a.filter(item=>!b.includes(item))
// }


// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]