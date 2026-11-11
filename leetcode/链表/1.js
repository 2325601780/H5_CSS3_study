function ListNode(val,next){
    this.val = val ? val : null
    this.next = null
}

let node1 = new ListNode(1)
let node2 = new ListNode(2)

node1.next = node2