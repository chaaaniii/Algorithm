function solution(nums) {
    let result = 0;
    let cnt = nums.length / 2;
    
    let arr = nums.filter((element, index) => {
        return nums.indexOf(element) === index;
    });
    
    if(arr.length >= cnt){
        result = cnt;
    }else{
        result = arr.length;
    }
    
    return result;
}