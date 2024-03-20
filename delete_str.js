
solution("nice to meet you")
function solution(my_string) {
    const str = 'aeiou'
    
    var newString = my_string.split('');
    for(let i=0; i<str.length; i++){
        for(let j=0; j<my_string.length; j++){
            if(newString.includes(str[i])){
                newString.splice(newString.indexOf(str[i]), 1)
            }
        }
    }
    console.log(newString.join(''));
}