let string;
let n;

main("test", 4)
function main(string, n){
    return string.repeat(n);
}

test("test", 3)
function test(string, n){
    let answer = '';
    for(let i=0; i<n; i++){
        answer += string
    }
    return answer;
}