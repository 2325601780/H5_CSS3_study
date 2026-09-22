// 红绿黄 各自亮的时长 3s, 2s, 1s

// setInterval(() => {
//     console.log('红灯亮');
//     setTimeout(() => {
//         console.log('绿灯亮');

//         setInterval(() => {
//             console.log('黄灯亮');
//         }, 2000);
//     }, 3000);
// }, 6000);


setInterval(() => {
    console.log('1');
}, 1000);

// function red(){
//     return new Promise((resolve) => {
//         console.log('红灯亮');
//         setTimeout(() => {
//             resolve();
//         }, 3000);
//     })
// }

// function green(){
//     return new Promise((resolve) => {
//         console.log('绿灯亮');
//         setTimeout(() => {
//             resolve();
//         }, 2000);
//     })
// }

// function yellow(){
//     return new Promise((resolve) => {
//         console.log('黄灯亮');
//         setTimeout(() => {
//             resolve();
//         }, 1000);
//     })
// }

// function run(){
//     red().then(() => {
//     green().then(() => {
//         yellow().then(() => {
//             run();
//         })
//     })
// })
// }

function setColor(color,time){
    console.log(color);
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    })
}

// function run(){
//     setColor('红灯亮',3000).then(() => {
//         setColor('绿灯亮',2000).then(() => {
//             setColor('黄灯亮',1000).then(() => {   
//                 run();
//             })
//         })
//     })
// }
// run();

async function run(){
    await setColor('红灯亮',3000);
    await setColor('绿灯亮',2000);
    await setColor('黄灯亮',1000);
    run();
}
run();
