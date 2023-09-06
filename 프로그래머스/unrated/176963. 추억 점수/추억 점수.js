function solution(name, yearning, photo) {
  const nameToYearning = {}; // 이름과 그리움 점수를 연결하는 맵을 생성

  // name 배열과 yearning 배열을 사용하여 맵을 만듭니다.
  for (let i = 0; i < name.length; i++) {
    nameToYearning[name[i]] = yearning[i];
  }

  const answer = []; // 각 사진의 추억 점수를 저장할 배열

  // photo 배열을 순회하면서 추억 점수를 계산합니다.
  for (const peopleInPhoto of photo) {
    let totalScore = 0;

    // 사진 안의 각 인물의 그리움 점수를 더합니다.
    for (const person of peopleInPhoto) {
      if (nameToYearning[person] !== undefined) {
        totalScore += nameToYearning[person];
      }
    }

    answer.push(totalScore); // 각 사진의 추억 점수를 배열에 추가
  }

  return answer;
}