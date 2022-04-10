let massive = [6, 1, 7, 8, 9, 3, 5, 4, 2];
let sortedMassive = [];
length = massive.length;

for (let i = 0; i < length; i++) {
    let smallest = Math.min(...massive)
    sortedMassive.push(massive.splice(massive.indexOf(smallest), 1))
}

console.log(sortedMassive)