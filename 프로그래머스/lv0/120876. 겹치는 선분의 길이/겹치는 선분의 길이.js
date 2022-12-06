function solution(lines) {
  const linesArr = [...lines[0], ...lines[1], ...lines[2]]
  const min = Math.min(...linesArr)
  const max = Math.max(...linesArr)

  const result = Array(max - min + 1).fill(0)

  for (let line of lines) {
    line.sort((a, b) => a - b)

    if (min < 0) {
      line[0] += Math.abs(min)
      line[1] += Math.abs(min)
    }

    for (let i = line[0]; i < line[1]; i ++ ) {
      result[i] ++;
    }
  }
  
  return result.filter(x => x > 1).length;  

}