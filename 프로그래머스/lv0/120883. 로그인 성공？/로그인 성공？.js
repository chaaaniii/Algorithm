function solution(id_pw, db) {
    let result = "";
    db.map((a,b)=>{if(id_pw[0] === a[0] && id_pw[1] === a[1]) result = "login"
    else if(id_pw[0] === a[0] && id_pw[1] !== a[1]) result = "wrong pw"
    else if(id_pw[0] !== a[0] && id_pw[1] !== a[1]) result = "fail" })
    return result
}