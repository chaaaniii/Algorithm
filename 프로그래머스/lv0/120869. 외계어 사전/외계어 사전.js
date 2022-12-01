function solution(spell, dic) {
    spell = spell.sort().join('')
    console.log(spell)
    return dic.map((x) => x.split('').sort().join('')).find((x) => x === spell)?1:2
}