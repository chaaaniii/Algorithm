function solution(keyinput, board) {
    let loc = [0,0];
    
    keyinput.forEach(x => {
        if (x === 'up' && loc[1] < Math.floor(board[1]/2)){
            loc[1] += 1
        }
        if (x === 'down' && loc[1] > -Math.floor(board[1]/2)){
            loc[1] -= 1
        }
        if (x === 'left' && loc[0] > -Math.floor(board[0]/2)){
            loc[0] -= 1
        }
        if (x === 'right' && loc[0] < Math.floor(board[0]/2)){
            loc[0] += 1
        }
    })
    return loc
}