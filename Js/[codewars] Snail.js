snail = function (array) {
    let answer = []
    while (array.length >= 1) {
        array[0].map((item) => {answer.push(item)})
        array.splice(0, 1);
        for (i of array) {
            answer.push(i[i.length - 1]);
            i.pop();
        }
        if(array.length>0){
             for (i of array[array.length - 1].reverse()) {
            answer.push(i)
        }
        array.pop()
        }
        for (i of array.reverse()) {
            answer.push(i.shift())
        }
        if (array.length>0){
            array.reverse()
        }
    }
    return answer
}


let array = [[1, 2, 3, 4, 5],
             [6, 7, 8, 9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
           [21, 22, 23, 24, 25]];
console.log(snail(array))
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//
// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:
//
// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]