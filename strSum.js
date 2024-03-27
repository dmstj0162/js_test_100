
main("123456789")
function main(num_str){
    var answer = 0;
    //* string을 split으로 배열 생성 
    const newStr = num_str.split("")
    //* 배열 생성 후 배열 안의 값을 숫자로 바꾸기
    const newNum = newStr.map(Number)
    for(let i = 0; i< newNum.length; i++){
        answer += newNum[i];  
    }
    console.log(answer);
}