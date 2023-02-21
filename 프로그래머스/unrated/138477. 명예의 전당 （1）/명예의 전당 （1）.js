function solution(k, score) {
  let honor = [];
  let result = [];

  score.forEach((n) => {

    honor.push(n);
    honor.sort((a, b) => b - a);

    if (honor.length >= k ) {
      result.push(honor[k - 1]);
    } else {
      result.push(honor[honor.length - 1]);
    }
  });

  return result;
}