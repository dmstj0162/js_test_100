solution([1,2,3,4,5], 3)
function solution(num_list, n){
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] === n){
            console.log(1);
        }else{
            console.log(0)
        }
    }
    return;
}