//Level 1
//프로그래머스 [카카오 인턴] 키패드 누르기 문제

//방법 1.

function getDistance(p1,p2){
    return Math.abs(p1[0]-p2[0])+Math.abs(p1[1]-p2[1]);
}

function solution(numbers, hand) {
    let answer='';
    let current=0;
    
    let keypad=[[1,3],[0,0],[1,0],[2,0],[0,1],[1,1],[2,1],[0,2],[1,2],[2,2]];
    let left=[0,3];
    let right=[2,3];
    let cur=[0,0];
    
    for(let i in numbers){
        
        current=numbers[i];
        
        if((current===1)||(current===4)||(current===7)){
            answer+='L';
            left=[keypad[current][0],keypad[current][1]];
        }
        else if((current===3)||(current===6)||(current===9)){
            answer+='R';
            right=[keypad[current][0],keypad[current][1]];
        }
        else{
            cur=[keypad[current][0],keypad[current][1]];
            
            const leftDis=getDistance(cur,left);
            const rightDis=getDistance(cur,right);
            
            if(leftDis>rightDis){
                answer+='R';
                right=[keypad[current][0],keypad[current][1]];
            }
            else if(leftDis<rightDis){
                answer+='L';
                left=[keypad[current][0],keypad[current][1]];
            }
            else{
                if(hand=='left'){
                    answer+='L';
                    left=[keypad[current][0],keypad[current][1]];
                }
                else{
                    answer+='R';
                    right=[keypad[current][0],keypad[current][1]];
                }
            }
        }
    }
    return answer;
}