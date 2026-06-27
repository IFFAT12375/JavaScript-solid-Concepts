class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let attempts = 0;

        while(students.length > 0 && attempts < students.length) {
            if(students[0] === sandwiches[0]) {
                students.shift();
                sandwiches.shift();
                attempts = 0;
            } else {
                let refuseStudents = students.shift();
                students.push(refuseStudents);
                attempts++;
            }
        }
        return students.length;
    }
}

// ==========================================
// 🚀 RUNNING AND TESTING INSIDE VS CODE
// ==========================================

// 1. Create an instance of your Solution class
const solver = new Solution();

// 2. Define your test inputs (Example 2 from the problem)
const testStudents = [1, 1, 0, 0];
const testSandwiches = [0, 1, 0, 1];

// 3. Call the method and store the result
const result = solver.countStudents(testStudents, testSandwiches);

// 4. Print the output to the VS Code terminal
console.log("------------------------------------");
console.log("Number of students unable to eat:", result); 
console.log("------------------------------------");
// Expected Output: 3
