// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

// 输入：l1 = [0], l2 = [0]
// 输出：[0]


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2){
    let head = null, tail = null;
    let carry = 0;
    while (l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        if (!head) {
            head = tail = new ListNode(sum % 10);
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }
        carry = Math.floor(sum / 10);
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        tail.next = new ListNode(carry);
    }
    return head;
}
var addTwoNumbers1 = function(l1, l2) {
    let longArr = [].concat(l1) || [];
    let shortArr = [].concat(l2) || [];
    let staging = 0;
    let returnArr = [];
    if (l1.length != l2.length){
        longArr = l1.length > l2.length ? l1 : l2 ;
        shortArr = l1.length > l2.length ? l2 : l1 ;
    }

    
    for (let i in longArr){
        let thisi = -i-1;
        if (i == 0){
            let count1 = new Number(parseInt(longArr.slice(-1)) + parseInt(shortArr.slice(-1)));
            count1 = count1.toString();
            if (count1.length == 2){
                staging = 1;
            } else {
                staging = 0;
            }
            returnArr.unshift(parseInt(count1.substr(-1)));
            continue;
        }
        let count = new Number(parseInt(longArr.slice(thisi,thisi+1)) + parseInt(shortArr.slice(thisi,thisi+1)));
        count = count.toString();
        
        if (staging == 1){
            returnArr.unshift(parseInt(count.substr(-1))+1);
        } else {
            returnArr.unshift(parseInt(count.substr(-1)));
        }
        if (count.length == 2){
            staging = 1;
        } else {
            staging = 0;
        }
    }
    return returnArr;
};