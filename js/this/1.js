// function identify(context){
//     return context.name.toUpperCase();
// }

// function speek(context){
//     console.log('i am ' + identify(context));
// }

// const user = {
//     name: 'tom'
// }

// speek(user)


function identify(){
    return this.name.toUpperCase();
}

function speek(){
    console.log('i am ' + identify.call(this));
}

const user = {
    name: 'tom'
}

speek.call(user)
