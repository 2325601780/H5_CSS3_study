function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


var mergeTwoLists = function(list1, list2) {
    let res = new ListNode()
    let point = res
    while(list1 && list2){
        if(list1.val<list2.val){
            point.next = list1
            list1 = list1.next
        }else{
            point.next = list2
            list2 = list2.next
        }
        point = point.next
    }
    if(list1==null){
        point.next = list2
    }else{
        point.next = list1
    }
    return res.next
};

console.log(mergeTwoLists());
l1 = [1,2,4], l2 = [1,3,4]