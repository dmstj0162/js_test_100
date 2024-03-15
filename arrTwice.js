
main([1,2,3,4,5])
function main(numbers){
    var answer = [];
    for(let i = 0; i < numbers.length; i++){
        answer = numbers[i] * 2;
        console.log(answer);
    }
}