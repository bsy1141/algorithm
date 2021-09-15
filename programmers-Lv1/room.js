//Level 1
//프로그래머스 - [7주차 위클리 챌린지] 입실 퇴실
//https://programmers.co.kr/learn/courses/30/lessons/86048

//회의실에 출입할 때 명부에 이름 적어야 함
//n명이 입실 후 퇴실
//만날 사람은 몇 명인지 구하기

function solution(enter, leave) {
    let answer=[];
    
    //answer 0으로 초기화
    for(let i=0;i<enter.length;i++){
        answer.push(0);
    }
    
    const room=[];
    //enter배열을 가리킬 포인터 enterIdx, leave배열을 가리킬 포인터 leaveIdx
    let enterIdx=0;
    let leaveIdx=0;
    
    //enterIdx, leaveIdx가 모두 사람 수와 같아져야만 while문 탈출
    while(enterIdx<enter.length||leaveIdx<leave.length){
        const enterNow=enter[enterIdx];
        const leaveNow=leave[leaveIdx];
        
        //퇴실해야 하는 사람이 방에 없으면 일단 입실시켜
        if(room.indexOf(leaveNow)===-1){
            room.push(enterNow);
            enterIdx++;
        }
        //퇴실해야하는 사람이 방에 있으면 내보내고
        //방에 사람이 있다면 그 수만큼 퇴실자가 만난 사람에 더해주고 (퇴실자는 방에 있는 사람은 무조건 만남)
        //방에 있는 사람들은 만난사람 + 1 (방에 있는 사람은 퇴실자랑 무조건 만남)
        else{
            room.splice(room.indexOf(leaveNow),1);
            if(room.length){
                answer[leaveNow-1]+=room.length;
                room.forEach(item=>answer[item-1]++)
            }
            leaveIdx++;
        }
    }
    return answer;
}