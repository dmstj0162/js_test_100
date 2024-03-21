//* n이 제곱수라면 1을, 아니면 2 return 

solution(144)
function solution(n){
    var answer = [];
    for(let i = 1; i <= Math.sqrt(n); i++) {
        if(n % i === 0){
            answer =1;
        }else{
            answer =2;
        }
    }
    console.log(answer);
}