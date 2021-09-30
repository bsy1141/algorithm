//arr로 selectNum개의 원소로 구성된 모든 조합을 찾아 배열로 리턴하는 함수 
function combination(arr,selectNum){
    const result=[];
    if(selectNum===1) return arr.map(v=>[v]);
    arr.forEach((v,idx,arr)=>{
        const fixed=v;
        const restArr=arr.slice(idx+1);
        const combinationArr=combination(restArr,selectNum-1);
        const combineFix=combinationArr.map(v=>[fixed,...v]);
        result.push(...combineFix);
    });
    return result;
}

//orders 사람이 주문한 주문서
//course 조합으로 만들어야 하는 메뉴 개수

function solution(orders,course){
    const answer=[];

    //메뉴를 조합해야 하는 개수 course에 따라 for문 돌려서 찾은 메뉴조합을 answer에 넣어줌
    for(let i=0;i<course.length;i++){
        //orders에서 course[i]개의 조합을 찾아 result객체에 저장
        //key값은 메뉴구성조합 value는 주문된 횟수
        const result={};
        //result value값이 가장 큰 것을 저장하는 max(최대주문횟수)
        let max=0;

        //orders를 돌면서 조합을 찾아내고, 조합이 나온 횟수를 저장하고(result객체에), 최대 주문 횟수를 갱신(max)
        orders.forEach(order=>{
            combination(order.split(""),course[i]).forEach(v=>{
                const str=v.sort().join("");
                result[str]=result[str]?result[str]+1:1;
                max=max<result[str]?result[str]:max;
            })
        })

        //최대 주문 횟수가 2 미만인 것은 처리하지 않으므로
        //2이상이면 해당 횟수와 같은 값을 가지고 있는 키값을 answer에 넣어줌
        if(max>=2){
            for(const [key,value] of Object.entries(result)){
                if(value===max){
                    answer.push(key);
                }
            }
        }
    }
    //알파벳 오름차순으로 정렬해서 answer배열 출력
    return answer.sort();
}