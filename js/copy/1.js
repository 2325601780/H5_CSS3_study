// 10!

// function mul(n) {
//     let sum = 1
//     for(let i = 1;i <= n;i++) {
//         sum = sum * i
//     }
//     return sum
// }


// function mul(n) {
//     if(n==1) return 1
//     return n * mul(n-1)
// }

// console.log(mul(5));


// 1 1 2 3 5 8 13

function fb(n) {
    if(n == 2 || n ==1) return 1
    return fb(n-1) + fb(n-2)
}

console.log(fb(10));
