function solution(quiz) {
    let result = [];
    for (let i = 0; i < quiz.length; i++) {
        let formula = quiz[i].split(" ");
        if (formula[1] == '-') {
            if (Number(formula[0]) - Number(formula[2]) == Number(formula[4])) {
                result.push('O');
            } else {
                result.push('X');
            }
        } else {
            if (Number(formula[0]) + Number(formula[2]) == Number(formula[4])) {
                result.push('O');
            } else {
                result.push('X');
            }
        }
    }
    return result;
}