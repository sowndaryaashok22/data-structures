const LinkedList = require('./LinkedList');

const myLinkedList = new LinkedList();
myLinkedList.insertAtHead(10);
myLinkedList.insertAtHead(20);
myLinkedList.insertAtHead(30);
myLinkedList.insertAtHead(40);
 
//console.log(myLinkedList);
//myLinkedList.printList();
//

//console.log(myLinkedList.getNodeAtIndex(2).value);
//console.log(myLinkedList.getNodeAtIndex(2).next);
console.log(myLinkedList.insertNodeAtIndex(50 ,-1));
console.log("before inserting 50 at 2 index");
myLinkedList.printList();
myLinkedList.insertNodeAtIndex(50,2);
console.log("after inserting 50 at 2 index");
myLinkedList.printList();

console.log("after deleting node at 3 index");
myLinkedList.deleteNodeAtIndex(3);
myLinkedList.printList();

console.log("after deleting node at 0 index");
myLinkedList.deleteNodeAtIndex(0);
myLinkedList.printList();

console.log("after deleting node at 0 index");
myLinkedList.deleteNodeAtIndex(2);
myLinkedList.printList();