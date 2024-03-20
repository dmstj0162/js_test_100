
solution("aAb1B2cC34oOp")
function solution(my_string) {
    const num = my_string.split("");
    let result = 0;
    
    for(let i=0; i<my_string.length; i++){
        if(Number(num[i])){
            result += Number(num[i])
        }
    }
    console.log(result);
}