function fn(a) {
    console.log(a)
    var a = 123
    console.log(a)
    function a() {}
    var b = function() {}
    console.log(b)
    function c() {}
    var c = a
    console.log(c)
}

fn(1)

// AO = {
//   a: undefined, 1, function a() {}, 123,
//   b: undefined, function() {},
//   c: undefined, function c() {}, 123,
// }
