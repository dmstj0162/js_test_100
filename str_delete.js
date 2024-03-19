//*문자열에 a, e, i, o, u 모음 알파벳이 존재하면 제거하는 로직 구현
//* 1. for문 사용
const my_string = "nice to meet you";
main(my_string)
function main(my_string){
    const str = 'aeiou'

    let newString = my_string.split('');
    for(let i=0; i<str.length; i++){
        for(let j=0; j<my_string.length; j++){
            if(newString.includes(str[i])){
            newString.splice(newString.indexOf(str[i]), 1)
            }
        }
    }
    console.log(newString.join(''))
}

//* filter 함수 사용
solution(my_string)
function solution(my_string){
    const str = 'aeiou';
    let newString = my_string.split('').filter((el)=>(!str.includes(el))).join('')

    console.log(newString)
}

//* replace 함수 사용
solut(my_string)
function solut(my_string){
    console.log(my_string.replace(/['a','e','i','o','u']/g, ''))
}