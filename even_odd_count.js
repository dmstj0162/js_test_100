//* num)list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수 작성 
solution([1,2,3,4,5]);
function solution(num_list) {
  var result = [0, 0];
  for (let a of num_list) {
    result[a % 2] += 1;
  }
  console.log(result);
}
