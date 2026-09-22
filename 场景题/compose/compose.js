function A(ctx, next){
    console.log('A_Start');
    next();
    console.log('A_End');
}
function B(ctx, next){
    console.log('B_Start');
    next();
    console.log('B_End');
}

function C(ctx, next){
    console.log('C_Start');
    next();
    console.log('C_End');
}

function compose(middleware){
    return function(){
        let ctx = {};
        let index = 0;
        let next = function(){
            index++
            if(index >= middleware.length){
                return;
            }
            middleware[index](ctx, next);
        }
        middleware[index](ctx, next);
    }
}

function compose2(middleware){
    return function(ctx={}){
        function dispatch(i){
            if(i >= middleware.length){
                return;
            }
            const nextFn = () =>{
                dispatch(i+1);
            }
            middleware[i](ctx, nextFn);
        }
        dispatch(0);
    }
}


const fn = compose([A,B,C]);
fn();
