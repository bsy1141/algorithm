//Level 2
//프로그래머스 - 오픈채팅방(2019 KAKAO BLIND RECRUITMENT)
//https://programmers.co.kr/learn/courses/30/lessons/42888

// my trial-  성공
function solution1(record) {
    let id_name={};
    let temp=[];

    for(let i=0;i<record.length;i++){
        const msg=record[i].split(' ');

        if (msg[0]==="Enter"){
            id_name[msg[1]]=msg[2];
            temp.push(`${msg[1]}@님이 들어왔습니다.`);
        }
        else if(msg[0]==="Leave"){
            temp.push(`${msg[1]}@님이 나갔습니다.`)
        }
        else if(msg[0]==="Change"){
            id_name[msg[1]]=msg[2];
        }
    }
    const answer=temp.map(message=>{
        const name=message.split('@');
        return id_name[name[0]]+name[1];
    })
    return answer;
}

//better answer(깔끔!)
function solution2(record){
    const userInfo={};
    const answer=[];
    const stateMapping={
        'Enter': '님이 들어왔습니다',
        'Leave': '님이 나갔습니다'
    }
    record.forEach(message=>{
        const [state, id, nick] = message.split(' ');

        if(state!=='Change'){
            answer.push([state,id]);
        }

        if(nick){
            userInfo[id]=nick;
        }
    });

    return answer.map(([state,id])=>{
        return `${userInfo[id]}${stateMapping[state]}`;
    })
}