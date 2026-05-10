// 1. The Node Factory (Individual links)
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 2. The Main Manager
class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Modern way of writing: MyLinkedList.prototype.get
    get(index) {
        if (index < 0 || index >= this.size) return -1;
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.val;
    }

    addAtHead(val) {
        let newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    addAtTail(val) {
        if (this.head === null) {
            this.addAtHead(val);
            return;
        }
        let newNode = new ListNode(val);
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.size++;
    }

    addAtIndex(index, val) {
        if (index < 0 || index > this.size) return;
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        let newNode = new ListNode(val);
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
        this.size++;
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return;
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            curr.next = curr.next.next;
        }
        this.size--;
    }
}

// --- HOW TO RUN IN VS CODE ---
// This part creates an instance and prints results to your terminal
const myLL = new MyLinkedList();
myLL.addAtHead(1);
myLL.addAtTail(3);
myLL.addAtIndex(1, 2);    // List is now 1 -> 2 -> 3
console.log("Value at index 1:", myLL.get(1)); // Should print 2
myLL.deleteAtIndex(1);    // List is now 1 -> 3
console.log("Value at index 1 after delete:", myLL.get(1)); // Should print 3
