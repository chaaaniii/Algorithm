function solution(my_string) {
    let col = 'aeiou'
    return my_string.split('').filter((e)=>(!col.includes(e))).join('')
}
