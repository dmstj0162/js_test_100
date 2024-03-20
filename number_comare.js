solution(2,3)
solution(11,11)
function solution(num1, num2) {
    var answer = 0;
    if(num1 === num2){
        answer = 1;
    }else{
        answer = -1;
    }
    console.log(answer);
}