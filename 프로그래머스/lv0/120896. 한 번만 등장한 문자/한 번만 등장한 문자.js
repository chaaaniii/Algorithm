function solution(s) {
    let str = [...s].sort()
    let obj = str.reduce((a,c)=>{ a[c] = (a[c]||0)+1;return a},{})
    return Object.keys(obj)
    .filter(key => obj[key] === 1)
    .sort((a, b) => (a - b))
    .join('');
}