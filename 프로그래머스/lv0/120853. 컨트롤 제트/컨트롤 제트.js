function solution(s) {
    let result = []
    let nums = s.split(" ");
    for (let i = 0; i < nums.length; i++ ){
        (nums[i]==='Z')? result.push(-nums[i-1]):result.push(nums[i]*1)
    }
    return result.reduce((a,c)=>a=a+c,0)
}