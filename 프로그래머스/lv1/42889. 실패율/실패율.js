function solution(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let goal_stage = stages.filter((x) => x >= i).length;
        let fail_to_clear = stages.filter((x) => x === i).length;
        result.push([i, fail_to_clear/goal_stage]);
    }

    result.sort((a,b) => b[1] - a[1]);

    return result.map((x) => x[0]);

}