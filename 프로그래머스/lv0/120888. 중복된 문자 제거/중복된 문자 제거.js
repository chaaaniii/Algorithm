function solution(my_string) {
    let result = [...my_string];
    let set = new Set(result);
    return [...set].join('');
}