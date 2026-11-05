console.log(Number({}));
//1. ToNumber({})
//2. ToPrimitive({},Number)
// {}.valueOf()
// {}.toString()


console.log(Number([]));

if([]){
    console.log(123);
}