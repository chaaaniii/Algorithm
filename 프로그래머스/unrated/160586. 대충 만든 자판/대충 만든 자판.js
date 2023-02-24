function solution(keymap, targets) {
    let length = keymap.length;
    let Object = [];
    let test =[];
    keymap.map((v) => {
        let data = v.split("");
        data.map((w,i) => {
            Object.push({
            key : w,
            value : i+1
        })
        })

    })
    Object = Object.sort((a,b) => a.value - b.value);
    Object.map(v => {
        let aa = test.find(w=>w.key === v.key);
        if(aa === undefined){
            test.push({
                key : v.key,
                value : v.value
            })            
        }
    })
    let result = [];
    targets.map(v => {
        let cnt = 0;
        let word = v.split("");
        word.map(w => {
            let testdata = test.find(d => d.key === w)?.value;
            if(cnt !== -1){
            testdata === undefined ? 
                cnt = -1
                : cnt = parseInt(testdata) + cnt;}
                      })

        result.push(cnt);
    })
    return result
}