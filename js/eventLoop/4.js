console.log('script start');    //1
async function async1() {
  await async2()
  console.log('async1 end');    //5
}
async function async2() {       //2
  console.log('async2 end');
}
async1()
setTimeout(() => {              //8
  console.log('setTimeout');
}, 0)
new Promise((resolve, reject) => {
  console.log('promise');       //3
  resolve()
})
  .then(() => {                 
    console.log('then1');       //6
  })
  .then(() => {
    console.log('then2');       //7
  });
console.log('script end');      //4