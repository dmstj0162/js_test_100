//* 최빈값 구하기
//* 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미
//* 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성하기
//* 최빈값이 여러개면 -1 return

//* 입출력 예시
//* [1,2,3,3,3,4]에서 최빈값은 3
//*[1,1,2,2]에서 최빈값은 여러개이므로 -1 
//*[1]에는 1만 있으므로 최빈값 1


main([1,2,3,3,3,3,4])
function main(array){
    let countObj = {}; //* array 원소가 몇 번 나왔는지 알 수 있는 카운트 객체
    let maxCount = 0; //* 객체에서 가장 큰 값을 찾는 변수 선언
    let modes = []; //* maxCount인 num을 저장하는 배열
    //* array 값을 비교
    for(let i = 1; i<array.length; i++){
        const num = array[i]; //* 배열의 원소를 num에 담아줌 
        //* 현재 원소가 countObj에 있는지 확인
        //* 있으면 key 값에 num이 들어가고 value를 1증가, 없으면 value를 1로 초기화
        console.log(num);
        countObj[num] = countObj[num] ? countObj[num] + 1 : 1;
        console.log(countObj[num])

        if(countObj[num] > maxCount){
            maxCount = countObj[num]
            modes = [num];
        }else if(countObj[num] === maxCount){
            modes.push(num);
        }

    }
    return modes.length > 1 ? -1 : modes[0];
}
