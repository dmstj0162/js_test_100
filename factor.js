//* 약수 구하기
const num = 8;
let result = [];
let index = 1;

//* while 문 사용
function test(num){
    while (index <= num) {
      if (num % index == 0) {
        console.log(index);
      }
      index +=1
    }
}

//* for문 사용
main(num)
function main(num) {
    var count = 0;
    for(let i = 1; i<=num; i++){
        if(num % i === 0){
            count += 1
            result.push(i);
        }
    }
    console.log(result);
    console.log(count)
}
