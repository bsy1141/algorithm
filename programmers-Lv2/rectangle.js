//Level 1
//프로그래머스 - 멀쩡한 사각형
//https://programmers.co.kr/learn/courses/30/lessons/62048

//최대공약수 구하는 공식(유클리드 호제법)
const gcd = (w,h) =>{
    if(w%h!==0){
        return gcd(h,w%h);
    }
    else return h;
}

/*
(가로+세로-최대공약수)가 대각선을 지나는 사각형의 개수가 되는 이유:
    1. 가로,세로의 길이가 서로소인 경우 대각선을 지나는 사각형의 개수 = w+h-1
    2. (가로,세로의 길이가 서로소가 아닌 경우) 사각형에서 서로소 관계의 사각형의 개수 = 최대공약수
        최대공약수 g 가로 w' 세로 h' 라고 한다면
        대각선을 지나는 사각형의 개수 g*(w'/g+h'/g-1)=w'+h'-g
        -> 따라서 대각선을 지나는 사각형의 개수는 가로+세로-최대공약수
*/
function solution(w,h){
    return w*h-(w+h-gcd(w,h));
}