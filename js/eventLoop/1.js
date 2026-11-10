console.log(1);
new Promise((resolve) => {
  console.log(2);
  resolve()
}).then(() => {
  console.log(3);
  setTimeout(() => {  // 2
    console.log(4);
  }, 0)
})
setTimeout(() => { // 1
  console.log(5);
}, 1000)
console.log(6);




setTimeout(() => {
  console.log(1);
}, 1000)
setTimeout(() => {
  console.log(2);
}, 1000)