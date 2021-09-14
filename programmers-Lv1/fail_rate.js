//Level 1
//프로그래머스 - [2019 카카오 블라인드 채용] 실패율
//https://programmers.co.kr/learn/courses/30/lessons/42889


function solution(N, stages) {
    let obj={};
    let stages_rate=[];
    let answer=[];
    
    for(let i=1;i<=N;i++){
        obj[i]=0;
    }
    
    stages.forEach(item=>{
        obj[item]++;
    })
    
    let people=stages.length;
    for(let i=1;i<=N;i++){
        let rate=obj[i]/people;
        stages_rate.push({key:i,rate:rate});
        people-=obj[i];
    }
    
    stages_rate.sort((a,b) => b.rate-a.rate);
    
    stages_rate.forEach(item=>answer.push(item.key));
    
    return answer;
}