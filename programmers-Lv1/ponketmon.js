//Level 1
//프로그래머스 - 폰켓몬
//https://programmers.co.kr/learn/courses/30/lessons/1845

/*
    방법 1 : 내 방법
    - kind.length : 폰켓몬 종류 개수
    - sort 이용해서 nums에 없는 것들 골라냄
*/
const solution1 = (nums) =>{
    nums.sort((a,b)=>a-b);
    let kind=[];
    nums.map(num=>{
        if(!kind.includes(num)){
            kind.push(num);
        }
    });
    return nums.length/2>=kind.length? kind.length: nums.length/2;
}

/*
    방법2 : 간단하게 set을 이용하는 해결방법
    Set에 인자로 nums를 주게 되면, 중복되는 것은 삭제되고 하나씩만 남음
    그렇게 만든 Set을 다시 배열로 만들어서 길이를 구할 수 있음(Array.from 사용해도 됨)
*/
const solution2=(nums)=>{
    const max=nums.length/2;
    //const arr=Array.from(new Set(nums));
    const arr=[...new Set(nums)];
    
    return arr.length>max? max:arr.length;
}

