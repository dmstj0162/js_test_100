//* arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수이면 2로 나누고
//* 50보다 작은 홀수라면 2를 곱함

main([1,2,5,45,66,79])
function main(arr){
    var answer = [];
    for(let i=0; i<arr.length; i++){
        const res = arr[i]
        if(res >= 50 && res % 2 === 0){
            answer.push(Math.floor(res / 2))
        }else if(res < 50 && res % 2 != 0){
            answer.push(res*2)
        }else{
            answer.push(res)
        }
    }
    console.log(answer)
}