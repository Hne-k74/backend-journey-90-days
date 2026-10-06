// ===== Challenge 1: Variables =====
const name = "Henok Michael";
const age = 21;
const university = "Arba Minch University";
const department = "Software Engineering";
const isStudent = true;

console.log(`Hello, my name is ${name}`);
console.log(`I am ${age} years old`);
console.log(`I study at ${university}`);
console.log(`My department is ${department}`);
console.log(`If you're asking whether I'm a student, the answer is ${isStudent}`);

// ===== Challenge 2: if / else =====
if (age >= 18) {
    console.log("You can apply for the internship.");
} else {
    console.log("You are too young to apply.");
}

// ===== Challenge 3: Function =====
function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(100, 3));

// ===== Challenge 4: Arrays =====
const students = ["JOHN", "MARY", "STEPHEN", "ENOCH", "SARA"];

console.log(students[0]);                     // first student
console.log(students[students.length]);       // undefined (index 5 doesn't exist)
console.log(students[students.length - 1]);   // last student

students.push("MARCUS");
console.log(students);
console.log(students.length);

// ===== Challenge 5: Objects =====
const student = {
    id: 486,
    fullName: "Henok Michael",
    department: "Software Engineering",
    age: 21,
    email: "henok@example.com",
    cgpa: 3.45
};

console.log(`My id is ${student.id}`);
console.log(`My name is ${student.fullName}`);
console.log(`My department is ${student.department}`);
console.log(`My age is ${student.age}`);
console.log(`My email is ${student.email}`);
console.log(`My cumulative GPA is ${student.cgpa}`);