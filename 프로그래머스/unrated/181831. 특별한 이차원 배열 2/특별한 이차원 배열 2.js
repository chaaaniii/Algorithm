function solution(arr) {
     const answer = arr.length;

    for(let i=0; i<answer; i++) {
        for(let j=i+1; j<answer; j++) {
            if(arr[i][j] !== arr[j][i]) return 0;
        }
    }

    return 1;

}