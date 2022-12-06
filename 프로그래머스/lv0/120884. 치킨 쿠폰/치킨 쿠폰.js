function solution(chicken) {
    let totalCoupons = chicken;
    let result = 0;
    while (totalCoupons >= 10) {
        const toOrder = Math.floor(totalCoupons / 10);
        const leftCoupons = totalCoupons % 10;
        result += toOrder;
        totalCoupons = toOrder + leftCoupons;
    }
    return result;
}
