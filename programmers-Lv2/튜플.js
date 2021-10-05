//Level 2
//프로그래머스 - 튜플
//https://programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
    const answer=[];
    const temp=s.split("{").join("").split("}").join("").split(",").map(item=>+item);
    
    const set=new Set(temp);
    const obj={};
    set.forEach(item=>{
        const num=temp.filter(x=>x===item).length;
        obj[item]=num;
    })
    const keys=Object.keys(obj);
    const values=Object.values(obj);
    
    for(let i=set.size;i>0;i--){
        const val=Number(keys[values.indexOf(i)]);
        answer.push(val);
    }
    return answer;
}