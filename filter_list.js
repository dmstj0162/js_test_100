//* 이어 붙인 수
//* 리스트의 홀수만 순서대로 이어 붙인 수와 짝수만 이어 붙인 수의 합

main([5,7,8,3])
function main(num_list){
    let odd = num_list.filter(a => (a%2===1))
    let even = num_list.filter(a => (a%2===0))
    console.log(Number(odd.join('')) + Number(even.join('')))
}