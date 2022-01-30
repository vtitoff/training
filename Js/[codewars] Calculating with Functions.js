function zero(f) {
    let num=0;
    if (f === undefined) return num
    else if (massive[1] === 'plus') return num + massive[0]
    else if (massive[1] === 'minus') return num - massive[0]
    else if (massive[1] === 'times') return num * massive[0]
    else if (massive[1] === 'divided') return parseInt(num/massive[0])
}
function one(f) {
    let num=1;
    if (f === undefined) return num
    else if (massive[1] === 'plus') return num + massive[0]
    else if (massive[1] === 'minus') return num - massive[0]
    else if (massive[1] === 'times') return num * massive[0]
    else if (massive[1] === 'divided') return parseInt(num/massive[0])
}
function two(f) {
    let num=2;
    if (f === undefined) return num
    else if (massive[1] === 'plus') return num + massive[0]
    else if (massive[1] === 'minus') return num - massive[0]
    else if (massive[1] === 'times') return num * massive[0]
    else if (massive[1] === 'divided') return parseInt(num/massive[0])
}
function three(f) {
    let num=3;
    if (f === undefined) return num
    else if (massive[1] === 'plus') return num + massive[0]
    else if (massive[1] === 'minus') return num - massive[0]
    else if (massive[1] === 'times') return num * massive[0]
    else if (massive[1] === 'divided') return parseInt(num/massive[0])
}
function four(f) {
    let num=4;
    if (f === undefined) return num
    else if (massive[1] === 'plus') return num + massive[0]
    else if (massive[1] === 'minus') return num - massive[0]
    else if (massive[1] === 'times') return num * massive[0]
    else if (massive[1] === 'divided') return parseInt(num/massive[0])
}
function five(f) {
    let num=5;
    if (f === undefined) return num
    else if (massive[1] === 'plus') return num + massive[0]
    else if (massive[1] === 'minus') return num - massive[0]
    else if (massive[1] === 'times') return num * massive[0]
    else if (massive[1] === 'divided') return parseInt(num/massive[0])
}
function six(f) {
    let num=6;
    if (f === undefined) return num
    else if (massive[1] === 'plus') return num + massive[0]
    else if (massive[1] === 'minus') return num - massive[0]
    else if (massive[1] === 'times') return num * massive[0]
    else if (massive[1] === 'divided') return parseInt(num/massive[0])
}
function seven(f) {
    let num=7;
    if (f === undefined) return num
    else if (massive[1] === 'plus') return num + massive[0]
    else if (massive[1] === 'minus') return num - massive[0]
    else if (massive[1] === 'times') return num * massive[0]
    else if (massive[1] === 'divided') return parseInt(num/massive[0])
}
function eight(f) {
    let num=8;
    if (f === undefined) return num
    else if (massive[1] === 'plus') return num + massive[0]
    else if (massive[1] === 'minus') return num - massive[0]
    else if (massive[1] === 'times') return num * massive[0]
    else if (massive[1] === 'divided') return parseInt(num/massive[0])
}
function nine(f) {
    // return calc(f, 9)
    let num=9;
    if (f === undefined) return num
    else if (massive[1] === 'plus') return num + massive[0]
    else if (massive[1] === 'minus') return num - massive[0]
    else if (massive[1] === 'times') return num * massive[0]
    else if (massive[1] === 'divided') return parseInt(num/massive[0])
}

function plus(numb) {
    return massive = [numb, 'plus'];
}
function minus(numb) {
    return massive = [numb, 'minus'];
}
function times(numb) {
    return massive = [numb, 'times'];
}
function dividedBy(numb) {
    return massive = [numb, 'divided'];
}




//cool variant
function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };



// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));