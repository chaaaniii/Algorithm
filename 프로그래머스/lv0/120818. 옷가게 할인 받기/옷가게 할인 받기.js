function solution(price) {
    return (price >= 500000) ? Math.floor(price - price*0.2) : (price >= 300000) ? Math.floor(price - price*0.1) : (price >= 100000) ? Math.floor(price - price*0.05) : price
}