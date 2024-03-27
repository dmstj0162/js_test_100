//* 배열만들기(1)
//* 정수 n,k가 주어졌을 때, 1 이상 n 이하의 정수 중에서 k의 배수를 오름차순으로 저장한 배열을 return

main(20, 3)
function main(n, k){
    var answer = [];
    for(let i = 1; i<n; i++){
        var multiples = i*k;
        if(n >= multiples){
            answer.push(multiples)
        }
    }
    console.log(answer)
}