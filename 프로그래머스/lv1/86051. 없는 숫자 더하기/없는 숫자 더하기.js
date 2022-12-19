function solution(numbers) {
    let nums = [0,1,2,3,4,5,6,7,8,9]
    numbers = numbers.sort((a,b)=>a-b)
    return nums.filter(x=> !numbers.includes(x)).reduce((a,c)=> a = a+c)
}