function solution(emergency) {
    let order = [...emergency].sort((a,b)=>b-a);
    return emergency.map((x)=> order.findIndex((n) => n === x)+1)
    
}