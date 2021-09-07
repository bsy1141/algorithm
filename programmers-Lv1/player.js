//Level 1
//프로그래머스 - 완주하지 못한 선수
//https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

//방법 1.

function solution(participant,completion){
    var hash=[];
    
    participant.forEach(item=>{
        hash[item]=hash[item]?hash[item]+1:1;
    })

    completion.forEach(item=>{
        hash[item]-=1;
    })

    for(let key in hash){
        if(hash[key]>=1) return key;
    }
}