//Level 1
//프로그래머스 [카카오 인턴] 키패드 누르기 문제

//방법 2. 좀 더 깔끔한 버전

function getDistance(cur,dir){
    const keypad={
        1:[0,0], 2:[1,0], 3:[2,0],
        4:[0,1], 5:[1,1], 6:[2,1],
        7:[0,2], 8:[1,2], 9:[2,2],
        '*':[0,3], 0:[1,3], '#':[2,3]
    };

    const currentPos=keypad[cur];
    const dirPos=keypad[dir];

    return Math.abs(currentPos[0]-dirPos[0])+Math.abs(currentPos[1]-dirPos[1]);
}

function solution(numbers, hand) {
    let answer='';
    
    let leftPos='*';
    let rightPos='#';
    
    for(let i in numbers){
        
        let current=numbers[i];

        if(current===1||current===4||current===7){
            answer+='L';
            leftPos=current;
        }
        else if(current===3||current===6||current===9){
            answer+='R';
            rightPos=currnet;
        }
        else{
            const leftDis=getDistance(current,leftPos);
            const rightDis=getDistance(current,rightPos);
            
            if(leftDis>rightDis){
                answer+='R';
                right=currnet;
            }
            else if(leftDis<rightDis){
                answer+='L';
                left=current;
            }
            else{
                if(hand==='left'){
                    answer+='L';
                    left=current;
                }
                else{
                    answer+='R';
                    right=current;
                }
            }
        }
    }
    return answer;
}