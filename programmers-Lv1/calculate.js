//Level 1
//프로그래머스 - [1주차 위클리 챌린지] 부족한 금액 계산하기
//https://programmers.co.kr/learn/courses/30/lessons/82612

//원래 이용료 price 놀이기구 n번째 이용한다면 price*n
//count 번 타게 되면 자신이 가지고 있는 금액에서 얼마가 모자라는지 리턴
function solution(price, money, count) {
    var answer = 0;
    for(let i=1;i<=count;i++){
        answer+=(price*i);
    }
    
    return answer-money>0?answer-money:0;
}