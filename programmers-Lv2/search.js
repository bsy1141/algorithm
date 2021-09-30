//이분탐색과 조합을 이용해야 함

/*
    [조합함수]
    arr=["java","backend","junior","pizza"]라면 
    result[javabackendjuniorpizza]=score로 만들고 그 외에도 
    '-'이 들어갈 수 있는 모든 조합을 만들어서 result[key]=score을 수행해주는 함수
    ex. [java---], [java-junior-], [javabackend--]....등
*/
function combination(arr,score,map,start){
    let key=arr.join("");
    let value=map[key];

    if(value){
        map[key].push(score);
    }
    else{
        map[key]=[score];
    }
    for(let i=start;i<arr.length;i++){
        let combiArr=[...arr];
        combiArr[i]='-';
        combination(combiArr,score,map,i+1);
    }
}

/*
    [이분탐색 함수]
    query가 "- and backend and senior and - 150"일 때
    key=
    score=150
    result[-backendsenior-]에 들어있는 점수들과 score를 비교하며 score보다 크거나 같은 점수들의 개수를 리턴하는 함수
*/
function binarySearch(map,key,score){
    let scoreArr=map[key];
    
    if(scoreArr){
        let start=0;
        let end=scoreArr.length;

        while(start<end){
            let mid=Math.floor((start+end)/2);

            if(scoreArr[mid]>=score){
                end=mid;
            }
            else{
                start=mid+1;
            }
        }
        return scoreArr.length-start;
    }
    return 0;
}

function solution(info,query){
    const answer=[];
    let map={};

    //info 배열의 각 문자열의 모든 조합을 key:[score..]형식으로 map 객체에 저장
    for(let i=0;i<info.length;i++){
        const arr=info[i].split(" ");
        const score=arr.pop();
        combination(arr,score,map,0);
    }

    //점수 배열을 오름차순으로 정렬
    for(let key in map){
        map[key].sort((a,b)=>a-b);
    }

    //map객체와 비교를 해야하기 때문에 
    //query의 각 문자열을 쪼개서 점수를 제외한 나머지부분과 점수로 쪼갬
    //점수를 제외한 나머지 부분은 문자열로 만들어서 key로 점수는 score로 해서 binarySearch로 전달
    for(let i=0;i<query.length;i++){
        const arr=query[i].replace(/ and /g,"").split(" ");
        const score=Number(arr.pop());
        answer.push(binarySearch(map,arr.join(""),score));
    }
    return answer;
}


/*정확성 성공 효율성 실패
function solution(info, query) {
    const suppliers=[];
    const answer=[];
    for(let i=0;i<info.length;i++){
        suppliers.push([]);
        const supplier=info[i].split(" ");
        for(let j=0;j<4;j++){
            suppliers[i][j]=supplier[j];
        }
        suppliers[i][4]=Number(supplier[4]);
    }
    
    query.forEach(q=>{
        const qs=q.split(" and ");
        const temp=qs[3].split(" ");
        let ans=0;
        qs.pop();
        qs.push(temp[0]);
        qs.push(Number(temp[1]));
        
        suppliers.forEach(s=>{
            let count=0;
            for(let i=0;i<4;i++){
                if(qs[i]==='-'||qs[i]===s[i]){
                    count+=1;
                }
            }
            if(count===4){
                if(s[4]>=qs[4]){
                    ans+=1;
                }
            }
        })
        answer.push(ans);
    });
    return answer;
}
*/

