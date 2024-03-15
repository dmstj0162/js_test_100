
main('hello', 3)
function main(string, n){
    console.log([...string].map(a => a.repeat(n)).join(""))
}