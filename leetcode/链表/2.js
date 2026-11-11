const arr = [1, 2, 3, 4, 5, 6]

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

const index = 4
let node = list
for (let i = 1; i < index; i++) {
  node = node.next
}
console.log(node.val);