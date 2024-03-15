
function main(array, height){
    let num = 0;
    for(let i = 0; i<array.length; i++){
        if(array[i] > height) return num += 1
    }
}

//* 같은 결과 값을 Filter 함수로 나타냈을 때
//* Filter는 조건에 맞는 모든 요소를 필터링해서 새로운 배열로 반환해준다.
//* array라는 배열에 i가 height보다 큰 값만을 뽑아서 새로운 배열로 반환하고 그 배열의 길이를 구하는 방법 

function solution(array, height){
    return array.filter(i => i > height).length;
}

console.log(64/10) 
console.log(Math.floor(64/10))