function solution(num, k) {
    let arr = String(num);
    return (arr.indexOf(k) >= 0)? arr.indexOf(k)+1 :-1
}