//* 다음 배열에서 400, 500 삭제하는 코드 입력 
var nums = [100, 200, 300, 400, 500];

//* pop 사용 
// var a = nums.pop(2,3)
// var b = nums.pop(3,4)
// console.log(a)
// console.log(nums);

//* splice 사용
const c = nums.splice(0, 3)
console.log(c)