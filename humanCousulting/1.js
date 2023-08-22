// 1. 딱 맞는 가격 재고 개수 구하기
function solution(a, b, budget) {
    const minCost = Math.min(a, b);
    const limit = Math.floor(budget / minCost);

    let answer = 0;

    for (let x = 0; x <= limit; x++) {
        const y = (budget - (x * minCost)) / b;

        if (Number.isInteger(y) && y >= 0) {
            answer++;
        }
    }

    return answer > 0 ? answer : -1;
}
