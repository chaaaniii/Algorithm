function solution(num_list) {
    var answer = 0;
    
    if(num_list.length >10){
        answer = num_list.reduce((a,c) => a+c,0);
    } else {
        answer = num_list.reduce((a,c) => a*c,1);
    }
    return answer;
}