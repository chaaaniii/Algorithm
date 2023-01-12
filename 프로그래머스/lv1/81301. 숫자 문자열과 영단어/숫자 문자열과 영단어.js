function solution(s) {
let arr =[/zero/ig,/one/ig,/two/ig,/three/ig,/four/ig,/five/ig,/six/ig,/seven/ig,/eight/ig,/nine/ig];
for(let i = 0; i < 10; i++){
let result = (s.replace(arr[i],i))
s = result
}
return parseInt(s);
}