//Level 3
//프로그래머스 - 네트워크
//https://programmers.co.kr/learn/courses/30/lessons/43162

//dfs 이용 
//그래프 자체에서 방문 여부를 확인하려다보니, computers[i][i]의 값이 1이어서 확인이 까다로웠다 
//헷갈리겠다 싶으면 무조건 방문 여부 배열 visited 만들기

function solution1(n,computers){
    let count=0;
    //헷갈리면 원래 방법대로 방문 기록 알 수 있는 배열 만들기!!!!
    let visited=[];
    
    for(let i=0;i<n;i++){
        visited[i]=false;
    }

    const dfs = (v) => {
        for(let i=0;i<n;i++){
            //방문도 안했고 본인도 아니고 연결도 되어있으면, 그 노드 기준으로 dfs 실행
            if(v!==i && visited[i]===false && computers[v][i]===1){
                dfs(v);
            }
        }
    }

    //방문 안한 노드를 기준으로 dfs 실행해서 count++
    for(let i=0;i<n;i++){
        if(visited[i]===false){
            count+=1;
            dfs(i);
        }
    }
    return count;
}

//bfs 이용
function solution2(n,computers){
    let count=0;
    let visited=[];
    let queue=[];

    for (let i=0;i<n;i++){
        visited[i]=false;
    }

    const bfs = (v) =>{
        queue.push(v);
        visited[v]=true;
        
        while(queue.length!==0){
            const node=queue.shift();
            for(let i=0;i<n;i++){
                if(node!==i && visited[node][i]===false && computers[node][i]===1){
                    queue.push(i);
                    visited[i]=true;
                }
            }
        }
    }

    for(let i=0;i<n;i++){
        if(visited[i]===false){
            count+=1;
            bfs(i);
        }
    }
    return count;
}