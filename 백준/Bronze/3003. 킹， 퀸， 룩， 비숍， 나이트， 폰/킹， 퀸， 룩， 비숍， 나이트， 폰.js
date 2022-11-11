const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);

const chess =  [1,1,2,2,2,8];

let answer = inputData.map((i,index) => {
    return chess[index]-i;
})

console.log(...answer)