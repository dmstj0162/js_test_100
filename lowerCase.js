
solution("aBcDeFg")
function solution(myString) {
    var answer = '';
    if(myString.length > 0){
        answer = myString.toLowerCase();
    }else{
        console.log("값이 비어있음 ")
    }
    return answer;
}
