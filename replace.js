main("mmm")
function main(rny_string){
    var answer = '';
    //* 인자값에 있는 m을 rn으로 바꾸기
    // answer = rny_string.replace('m', 'rn')
    //* 인자값에 있는 모든 m을 rn으로 바꾸기
    answer = rny_string.replaceAll('m', 'rn')
    console.log(answer);
}