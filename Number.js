main(1234)
function main(n){
    var newStr;
    var answer;
    var sum = 0;
    newStr = n.toString();
    answer = newStr.split("");
    for(let i = 0; i<answer.length; i++){
        sum += Number(answer[i])
    }
    console.log(sum)
}