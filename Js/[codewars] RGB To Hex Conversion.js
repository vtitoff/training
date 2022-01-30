function rgb(r, g, b){
  let massive=[];
  for(let item of [r,g,b]){
    if(item>255) item=255;
    else if(item<0) item='00';
    else if((item+'').length===1) {
      item=('0'+item).toString(16).toUpperCase();
    }
    massive.push(item.toString(16).length>1?item.toString(16).toUpperCase():'0'+item.toString(16).toUpperCase());
  }
  return massive.join('');
}

console.log(rgb(0, 0, 0));



//codewars variant
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3