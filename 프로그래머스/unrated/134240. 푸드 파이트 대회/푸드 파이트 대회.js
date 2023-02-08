function solution(food) {
    let makeEvenFood =  food.map((f, i) => i > 0 &&  f%2 ? f-1 : f);
    let availableFood = makeEvenFood.map((f, i) => String(i).repeat(f/2));
    let result = [...availableFood,0,...availableFood.reverse()];
   
    return result.join('');
}