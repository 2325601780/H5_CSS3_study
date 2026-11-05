console.log(+ []);
//Number([])

// lval + rval
// 令 lprim 为 ToPrimitive(lval)
// 令 rprim 为 ToPrimitive(rval) 的结果
// lprim + rprim
// 如果 lprim 或 rprim 有一个是字符串，就将另一个也转成字符串进行拼接
// 否则全部转 number 进行相加

// {} + []

// [] == ![]
// [] == !true
// [] == false
// '' == 0
// 0 == 0
