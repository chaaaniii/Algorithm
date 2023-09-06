function solution(arr, k) {
  // k가 홀수인 경우 각 원소에 k를 곱하고,
  // k가 짝수인 경우 각 원소에 k를 더합니다.
  const answer = arr.map((element) => (k % 2 === 1 ? element * k : element + k));
  
  return answer;
}