
solution([1,1,2,3,4,5], 1)
function solution(array, n) {
    var answer = 0;
    for(let i=0; i<array.length; i++) {
        var res = array[i];
        if(res === n){
           answer += 1;
        }    }
    console.log(answer);
}