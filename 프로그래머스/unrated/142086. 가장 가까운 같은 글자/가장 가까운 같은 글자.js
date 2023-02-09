function solution(s) {
    let stack = [];
    let result = [];
    
    [...s].forEach((str) => {
        if(!stack.includes(str)){
            result.push(-1);
        }
              
        if(stack.includes(str)){
            result.push(stack.length - stack.lastIndexOf(str));
        }
                   
        stack.push(str);
    })
    
    return result;
}