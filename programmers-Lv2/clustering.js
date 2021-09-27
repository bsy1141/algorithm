//Level 2
//프로그래머스 - 뉴스 클러스터링(2017년 카카오 신입공채 1차 문제)
//https://programmers.co.kr/learn/courses/30/lessons/17677

//1. clustering 함수에서 시간 초과나는 부분을 고친 방법 , set 사용하지 않음
function clustering(arr1,arr2){
    const result=[];
    let intersection=[];
    let union=[];
    for(let i=0;i<arr2.length;i++){
        if(arr1.indexOf(arr2[i])>=0){
            intersection.push(arr1.splice(arr1.indexOf(arr2[i]),1));
        }
        union.push(arr2[i]);
    }

    for(let i=0;i<arr1.length;i++){
        union.push(arr1[i]);
    }
    result.push(intersection.length,union.length);
    return result;
}

function solution(str1, str2) {
    let arr1=[];
    let arr2=[];
    const eng = /^[a-zA-Z]*$/; 

    for(let i=0;i<str1.length-1;i++){
        const upper=str1.toUpperCase();
        const slice=upper.slice(i,i+2);
        if(slice.replace(eng,"").length!==2){
            arr1.push(upper.slice(i,i+2));
        }
    }

    for(let i=0;i<str2.length-1;i++){
        const upper=str2.toUpperCase();
        const slice=upper.slice(i,i+2);
        if(slice.replace(eng,"").length!==2){
            arr2.push(upper.slice(i,i+2));
        }
    }

    arr1.sort();
    arr2.sort();

    const result=clustering(arr1,arr2);

    if(result[1]===0){
        return 65536;
    }
    return Math.trunc(65536*(result[0]/result[1]));

}

//2. set을 사용하는 효율적인 방법
function solution(str1, str2) {
    let arr1=[];
    let arr2=[];
    const eng = /^[a-zA-Z]*$/; 

    for(let i=0;i<str1.length-1;i++){
        const upper=str1.toUpperCase();
        const slice=upper.slice(i,i+2);
        if(slice.replace(eng,"").length!==2){
            arr1.push(upper.slice(i,i+2));
        }
    }

    for(let i=0;i<str2.length-1;i++){
        const upper=str2.toUpperCase();
        const slice=upper.slice(i,i+2);
        if(slice.replace(eng,"").length!==2){
            arr2.push(upper.slice(i,i+2));
        }
    }

    const set=new Set([...arr1,...arr2]);
    
    let intersection=0;
    let union=0;

    set.forEach(item=>{
        const has1=arr1.filter(x=>x===item).length;
        const has2=arr2.filter(x=>x===item).length;

        intersection+=Math.min(has1,has2);
        union+=Math.max(has1,has2);
    })
    return union===0? 65536: Math.floor(intersection/union*65536);
}

/*
//clustering 함수에서 시간 초과남 
function clustering(arr1,arr2){
    const cluster=[];
    let count=0;
    let i;
    for(i=0;i<arr1.length;){
        const item=arr1[i];
        if(arr2.includes(item)){
            const num1=arr1.lastIndexOf(item)-arr1.indexOf(item)+1;
            const num2=arr2.lastIndexOf(item)-arr2.indexOf(item)+1;
            count+=Math.min(num1,num2);
            i+=num1;
        }
    }
    cluster.push(count);
    cluster.push(arr1.length+arr2.length-count);
    return cluster;
}

function solution(str1, str2) {
    let arr1=[];
    let arr2=[];
    const eng = /^[a-zA-Z]*$/; 
    
    for(let i=0;i<str1.length-1;i++){
        const upper=str1.toUpperCase();
        const slice=upper.slice(i,i+2);
        if(slice.replace(eng,"").length!==2){
            arr1.push(upper.slice(i,i+2));
        }
    }
    
    for(let i=0;i<str2.length-1;i++){
        const upper=str2.toUpperCase();
        const slice=upper.slice(i,i+2);
        if(slice.replace(eng,"").length!==2){
            arr2.push(upper.slice(i,i+2));
        }
    }
    
    arr1.sort();
    arr2.sort();
    
    const result=clustering(arr1,arr2);
    if(result[1]===0){
        return 65536;
    }
    return Math.trunc(65536*(result[0]/result[1]));
    
}
*/