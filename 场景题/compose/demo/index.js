import Koa from 'koa';
const app = new Koa();

function main(ctx, next){
    console.log('main_Start');
    next();
    console.log('main_End');
}

//app.use(main);

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

app.use(A);
app.use(B);

app.listen(3000,()=>{
    console.log('server is running at port 3000');
});
