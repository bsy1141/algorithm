//Level 1
//프로그래머스 - 타겟 넘버
//https://programmers.co.kr/learn/courses/30/lessons/43165

/*
    dfs 사용해서 푸는 문제: 
        - numbers 배열의 노드에 인접노드로 +,- 노드가 있다고 생각하고 순회
        - 전체적으로 모든 numbers 노드를 순회해야 함
        - 인접노드가 2개로 정해져있고(노드 값도 같고), 배열의 노드 순서대로 순회해야 하는 경우 
*/
function solution(numbers,target){
    let answer=0;
    
    const dfs=(depth,sum)=>{
        //조건에 부합하는지 먼저 확인, 이 조건에 부합하게 되면 함수를 종료할 수 있게 return 꼭 써줘야 함
        //return 쓰지 않으면 재귀함수로 인해 스택이 꽉 차게 되서 오류 발생(depth가 배열의 크기 이상으로 커져서 계속해서 재귀함수 수행됨)
        if(depth===numbers.length){
            if(sum===target){
                answer+=1;
            }
            return;
        }
        dfs(depth+1,sum+numbers[depth]);
        dfs(depth+1,sum-numbers[depth]);
    }
    
    dfs(0,0);

    return answer;
}