function solution(age) {
    let u_age = ['a','b','c','d','e','f','g','h','i','j']
    
    let num = String(age).split('')
    return num.map((a)=>u_age[a]).join('')
}