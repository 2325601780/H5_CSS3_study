function A(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('a');
            resolve()
        },1000)
    })
}

function B(){
    console.log('b');
}

// A().then(()=>{
//     B()
// })


async function fn(){
    await A()
    B()
}

fn()