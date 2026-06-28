class MyStack {
    constructor() {
        // This is our single internal queue
        this.queue = [];
    }

    /** 
     * @param {number} x
     * @return {void}
     */
    push(x) {
        // 1. Get the current size of older items
        let size = this.queue.length;
        
        // 2. Add the new item to the back
        this.queue.push(x);
        
        // 3. Rotate all older items to the back of the new item
        for (let i = 0; i < size; i++) {
            let rotatedItem = this.queue.shift(); // Remove from front
            this.queue.push(rotatedItem);        // Push to back
        }
    }

    /**
     * @return {number}
     */
    pop() {
        // Because of our push strategy, the top of the stack is at index 0
        return this.queue.shift();
    }

    /**
     * @return {number}
     */
    top() {
        // Returns the front item without removing it
        return this.queue[0];
    }

    /**
     * @return {boolean}
     */
    empty() {
        // Truthy/Falsy check: if length is 0, returns true
        return this.queue.length === 0;
    }
}

// ==========================================
// TEST SUITE (Run this file to see it work)
// ==========================================

const stack = new MyStack();

console.log("--- Testing Stack Operations ---");
stack.push(10);
stack.push(20);
stack.push(30);
console.log("length of stack (Should be 3):", stack.queue.length);
console.log("Pushed: 10, 20, 30");

console.log("Top element (Should be 30):", stack.top()); 

console.log("Popped element (Should be 30):", stack.pop());
console.log("New top element (Should be 20):", stack.top());

console.log("Is stack empty? (Should be false):", stack.empty());

stack.pop(); // Removes 20
stack.pop(); // Removes 10

console.log("Is stack empty after popping all? (Should be true):", stack.empty());
