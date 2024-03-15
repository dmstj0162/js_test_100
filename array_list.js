
main(3,[1,2,3,4,5,6,7,8,9])
function main(n, numlist){
    var answer = [];
    for(let i = 0; i < numlist.length; i++){
        var res = numlist[i]
        if(res % n === 0){
            answer.push(res);
        }
        return answer;
    }
}