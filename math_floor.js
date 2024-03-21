solution(7, 10)
function solution(slice, n){
    var answer = 0;
    if(n % slice === 0){
        answer = n/slice
    }else{
        answer = Math.floor(n/slice) +1
    }
    console.log(answer);
}