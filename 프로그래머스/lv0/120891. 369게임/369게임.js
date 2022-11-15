function solution(order) {
    let clap = ['3','6','9']
    let result = []
    return result = (''+order).split('').filter((x)=>clap.includes(x)).length

}