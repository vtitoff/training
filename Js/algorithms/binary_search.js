massive = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let low = 0
let high = massive.length - 1
let mid = Math.floor((low + high) / 2)


let num = 7 //загаданное число
let guess = massive[mid] //число для отгадывания

function binNum(num) {
    while (low <= high) {
        guess = massive[mid]
        if (guess < num) {
            low = mid + 1
            mid = Math.floor((low + high) / 2)
        } else if (guess > num) {
            high = mid - 1
            mid = Math.floor((low + high) / 2)
        } else {
            return guess
        }
    }
}

console.log(binNum(5))
