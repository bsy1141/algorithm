//Level 2
//프로그래머스 - 수식최대화
//https://programmers.co.kr/learn/courses/30/lessons/67257

//방법1 - 연산자 피연산자 배열로 나누지 않고 한번에 처리
//1(idx-1)*(idx)2(idx+1) 와 같은 수식의 결과(=2)를 idx-1자리에 저장하고 나머지 값들은 삭제
//arr.splice(n,a,b)=n번째 자리부터 a개를 삭제하고 n번째 자리에 b를 넣어라
//arr.slice(a,b) = a부터 b-1까지 삭제
//eval(문자열 연산식) = 문자열로 된 식의 결과를 리턴
//arr.includes(exp) = arr이 exp를 포함하면 true리턴
//arr.indexOf(exp) = arr에 exp가 있다면 앞에서부터 제일 먼저 발견한 exp의 인덱스를 리턴, 없으면 -1리턴

function solution1(expression) {
    const permutation = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '-', '+'],
        ['*', '+', '-']
    ];
    
    const candidate=[];
    
    for(let permu of permutation){
        const temp=expression.split(/([^0-9])/g);
        for (let exp of permu){
            while(temp.includes(exp)){
                const idx=temp.indexOf(exp);
                temp.splice(idx-1,3,eval(temp.slice(idx-1,idx+2).join("")));
            }
        }
        candidate.push(Math.abs(temp[0]));
    }
    return Math.max(...candidate);
}

//방법2
//연산자와 피연산자를 따로 저장해서 비교하는 방법
//연산자 배열의 i번째 인자는 피연산자[i] 연산자[i] 피연산자[i+1]의 형태로 연산이 이루어져야 함
//연산 결과는 피연산자[i]에 저장하고 피연산자[i+1], 연산자[i]는 splice를 이용해서 삭제 처리

function getResult(operator,num1,num2){
    switch(operator){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        default:
            return 0;
    }
}

function solution2(expression) {
    const permutation = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '-', '+'],
        ['*', '+', '-']
    ];
    const answer=[];

    for(let permu of permutation){
        const numbers=expression.split(/[^0-9]/).map(num=>+num);
        const operators=expression.match(/[^0-9]/g);
        for(let exp of permu){
            while(operators.includes(exp)){
                const idx=operators.indexOf(exp);
                numbers[idx]=getResult(operators[idx],numbers[idx],numbers[idx+1]);
                numbers.splice(idx+1,1);
                operators.splice(idx,1);
            }
        }
        answer.push(Math.abs(numbers[0]));
    }
    return Math.max(...answer);
}