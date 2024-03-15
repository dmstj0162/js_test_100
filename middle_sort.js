main([1,11,2,7,10])
function main(array){
    const num = Math.floor(array.length / 2)
    const result = array.sort(function(a,b){
        return a-b;
    })
    console.log(result[num]);
}

// let arr = [1,2,7,10,11]
// arr.sort(function (a,b) {
//     return a-b;
// })
// console.log(arr)