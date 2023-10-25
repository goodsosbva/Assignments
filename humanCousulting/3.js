// +, - 이용해서 0되는 값 구하기
function solution(numbers) {
    let answer = 0;

    function findCombi(index, currentSum) {
        if (index === numbers.length) {
            if (currentSum === 0) {
                answer++;
            }
            return;
        }

        findCombi(index + 1, currentSum + numbers[index]);
        findCombi(index + 1, currentSum - numbers[index]);
    }

    findCombi(0, 0);

    return answer;
}