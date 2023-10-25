// 자연수 나열 주 해당 번째 수 구하기
function solution(n) {
    let digits = 1; // 자리수
    let count = 9;  // 현재 자리수의 숫자 개수

    // 몇 자리 숫자인지 판단
    while (n > count * digits) {
        n -= count * digits;
        digits++;
        count *= 10;
    }

    // 찾아야 하는 숫자 구하기
    const number = Math.pow(10, digits - 1) + Math.floor((n - 1) / digits);
    const index = (n - 1) % digits;

    return parseInt(number.toString()[index]);
}