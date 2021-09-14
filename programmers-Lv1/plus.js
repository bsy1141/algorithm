//Level 1
//프로그래머스 - 없는 숫자 더하기
//https://programmers.co.kr/learn/courses/30/lessons/86051


function solution(numbers) {
    let oneToTen=[0,1,2,3,4,5,6,7,8,9];
    let answer=0;
    
    const filter=oneToTen.filter(item=>!numbers.includes(item));
    filter.forEach(item=>answer+=item);
    
    return answer;
}