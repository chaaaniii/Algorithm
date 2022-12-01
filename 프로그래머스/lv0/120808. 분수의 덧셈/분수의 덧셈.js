function solution(denum1, num1, denum2, num2) {
    let result = [0,0]
    let x = denum1*num2 + denum2*num1;
    let y = num1*num2
    let lcm = 1;
    for(let i = 0; i <= x;i++){
      if((x % i == 0) && (y % i == 0)){
          lcm = i;
      };
    };
    result[0] = x / lcm;
    result[1] = y / lcm;
    return result
}
