peopleObj = {
    name: 'Серега',
    age: 34,
    money: 15000,
    bag: {
        apple: 5,
        keys: 2,
        pocket: {
            nasvai: 15
        }
    }
}

function cloneObj(obj) {
    let newObj = {}
    for (key in obj) {
        if (typeof obj[key] !== 'object') {
            newObj[key] = obj[key];
        } else {
            newObj[key] = cloneObj(obj[key]);
        }
    }
    return newObj;
}

console.log(peopleObj);
igor = cloneObj(peopleObj);
igor.name = 'Игор';
peopleObj.bag.apple = 150;
console.log(igor);