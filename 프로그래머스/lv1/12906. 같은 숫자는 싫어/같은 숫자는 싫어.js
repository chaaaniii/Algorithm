function solution(arr){
    let result = []
    arr.forEach((item, index, array)=>{
        if (index === 0){
            result.push(item)
        } else if (array[index-1] !== item){
            result.push(item)
        }
    })
    return result
}