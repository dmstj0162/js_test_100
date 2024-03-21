solution(20);
solution(22);
function solution(n) {
  var count = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  console.log(count);
}
