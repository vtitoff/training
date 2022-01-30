let arr=[1, 2, 3, 4, 5, 6, 7]
function inBetween(a,b){
  return function(element){
    if(element>=a && element<=b) return true;
  }
}

function inArray(massive){
  return function(element){
    if(massive.includes(element)) return true;
  }
}

let a=arr.filter(inBetween(2, 4));
let b=arr.filter(inArray([1,2,3]));
console.log(a);
console.log(b);



// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// Например:

// /* .. ваш код для inBetween и inArray */
// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2