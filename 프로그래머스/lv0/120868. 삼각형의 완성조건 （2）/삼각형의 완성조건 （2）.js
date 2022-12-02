function solution(sides) {
    let result = 0;
    sides.sort((a,b)=>b-a);
    let sum = sides.reduce((a,c)=> {a =a+c; return a},0)
    for (let i = 0; i < sum; i++){
        if(sides[0]<sides[1]+i){
            result++
        } else if(sum<sides[0]){
            result++
        }
    }
    return result
}