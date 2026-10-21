// GO = {}
var a
var b = 2
function a () {
    console.log(a);
    var c = 3
    var a = b
    function c () {}
    console.log(c);
}
a()
// AO = {}
console.log(a);
