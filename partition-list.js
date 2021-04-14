/*
Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.

Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Input: head = [2,1], x = 2
Output: [1,2]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
	//go though the whole list
	let node = head;
	let list1Head;
	let list1Tail;
	let list2Head;
	let list2Tail;
	while (node) {
		let next = node.next;
		//compare each node, if they are lesser than x, put it in another list
		if (node.val < x) {
			//take node out into another list
			if (!list1Head) list1Head = node;
			if (list1Tail) list1Tail.next = node;
			list1Tail = node;
			node.next = null;
		} else {
			if (!list2Head) list2Head = node;
			if (list2Tail) list2Tail.next = node;
			list2Tail = node;
			node.next = null;
		}

		node = next;
	}

	if (list1Tail && list2Head) list1Tail.next = list2Head;
	if (!list1Head) return head;
	return list1Head;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

ListNode.prototype.toString = function() {
    let result = this.val;
    let next = this.next;
    while(next) {
        result += ", " + next.val;
        next = next.next;
    }
    return result;
}

function createLinkedList(arr) {
    let head, tail;
    for(const num of arr) {
        const node = new ListNode(num);
        if(!head) head = node;
        if(tail) tail.next = node;
        tail = node;
    }
    return head;
}

const list1 = createLinkedList([1,4,3,2,5,2]);
console.log(`${list1} => ${partition(list1, 3)}`);