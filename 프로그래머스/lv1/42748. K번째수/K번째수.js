function solution(array, commands) {
    let result = [];
    let cut_array = [];
    
    for(let i = 0; i < commands.length; i ++){
        cut_array = array.slice(commands[i][0]-1,commands[i][1])
        cut_array.sort((a,b)=>a-b)[commands[i][2]-1]
        result.push(cut_array.sort((a,b)=>a-b)[commands[i][2]-1])
    }
    return result
}