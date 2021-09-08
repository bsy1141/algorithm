//Level 1
//프로그래머스 - [6주차 위클리 챌린지]
//https://programmers.co.kr/learn/courses/30/lessons/85002

//방법 1. 

function sortingInfo(info){
    info.sort(function(a,b){
        if(a.winRate===b.winRate){
            if(a.winNum===b.winNum){
                if(a.weight===b.weight){
                    return a.number-b.number;
                }
                return b.weight-a.weight;
            }
            return b.winNum-a.winNum;
        }
        return b.winRate-a.winRate;
    })
  
}
function solution(weights, head2head) {
    let info=[];
    let answer=[];
    
    for(let i=0;i<head2head.length;i++){
        let weight=weights[i];
        let count=0; let winCount=0; let winNum=0; let winRate=0;
        
        for(let j=0;j<head2head.length;j++){
            if(head2head[i][j]!=='N'){
                count++;
            }
            if(head2head[i][j]=='W'){
                winCount++;
                if(weight<weights[j]){
                    winNum++;
                }
            }
        }
        if(count!==0){
            winRate=(winCount/count)*100;
        }
        info.push({winRate:winRate,winNum:winNum,weight:weight,number:i+1});
    }
    
    sortingInfo(info);
    
    for(let i=0;i<info.length;i++){
        answer.push(info[i].number);
    }
    
    return answer;
}

