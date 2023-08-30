function solution(n, control) {
    return [...control].reduce((a, c) => {
        switch(c) {
            case 'w':
                return a+1
            case 's':
                return a-1
            case 'd':
                return a+10
            case 'a':
                return a-10
            default:
                return a
        }
    }, n)
}