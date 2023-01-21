function solution(t, p) {
    var pe = p.length - 1;
    var d = [];
    var count = 0;
    for(var i = 0; i < t.length - pe; i++){
        if(parseInt(t.substring(i,pe + i + 1)) <= parseInt(p)){
            count++;
        }
    }
    return count;
}