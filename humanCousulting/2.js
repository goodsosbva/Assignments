// 2. 더 많이 득표되는 사람 구하기기
function solution(vote) {
    var answer = "";
    var totalVote = vote.length
    const charCount = {};

    for (const char of vote) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    if (charCount['C'] >= parseInt(totalVote / 2)) return 'C'
    else if (charCount['A'] > charCount['B']) return 'A'
    else if (charCount['B'] > charCount['A']) return 'B'
    else if (charCount['B'] === charCount['A']) return 'AB'

    return answer;
}