
main([3,4,5,6])
function main(num_list){
    var answer = 0;
    var answer1 = 1;
    if(num_list.length > 10){
        num_list.forEach(element => {
            answer += element;
            console.log(answer);
        });
    }else{
        num_list.forEach(num => {
            answer1 *= num;
        })
        console.log(answer1)
    }
}

