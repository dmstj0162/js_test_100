
main([2, 1, 6])
function main(num_list){
    var answer = [];
    const a = num_list.length;
    if(num_list[a] > num_list[a-1]){
        answer = num_list.push(num_list[a] - num_list[a-1])
        console.log(answer)
    }else{
        answer = num_list.push(num_list[a] + num_list[a-1])
        console.log(answer)
    }
}
