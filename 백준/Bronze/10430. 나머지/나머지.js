const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(value=>+value);


const [a, b, c] = inputData;

console.log(Math.floor((a+b)%c));
console.log(Math.floor((a%c)+(b%c))%c);
console.log(Math.floor((a*b)%c));
console.log(Math.floor((a%c)*(b%c))%c);