function solution(cards1, cards2, goal) {
    let one = 0;
    let two = 0;
    let i = 0;
    let answer = 'Yes';
    
    while(i < goal.length) {
    	if (one < cards1.length && goal[i] == (cards1[one])) {
       		one++;
       	} else if (two < cards2.length && goal[i] == (cards2[two])) {
       		two++;
       	} else {
       		answer = "No";
       		break;    
        }
        i++;
    }
    return answer;
    }