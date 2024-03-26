//* 첫 번째로 나오는 음수의 index 값 리턴
main([12, 4, 15, 46, 38, -2, 15])
function main(num_list){
    console.log(num_list.findIndex(a => a<0))
}
