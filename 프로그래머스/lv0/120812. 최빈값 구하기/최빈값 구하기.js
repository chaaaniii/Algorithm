function solution(array) {
    let count = Array(Math.max(...array) + 1).fill(0);
    array.forEach(num => {
        count[num]++;
    })
    let maxCount = Math.max(...count);
    if (count.indexOf(maxCount) === count.lastIndexOf(maxCount)) {
        return count.indexOf(maxCount);
    } else {
        return -1;
    }
}