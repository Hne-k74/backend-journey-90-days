// ===== Object destructuring =====
const student = {
    id: 3,
    name: "Henok",
    cgpa: 3.5465785,
    department: "Aerospace Science"
};

const { id, name, department } = student;
console.log(id, name, department);

// ===== Array destructuring =====
const [first, second] = ["jose", "maria", "alberto"];
console.log(first, second);

// ===== Spread =====
const a = [1, 2, 3];
const b = [...a, 4, 5];
console.log(b);                          // [ 1, 2, 3, 4, 5 ]

const group1 = ["bruce", "sadie"];
const group2 = [...group1, "treasa", "ephrem"];
console.log(group2);

const student4 = { id: 4, name: "Lucinda" };
const updated = { ...student4, cgpa: 4.0 };
console.log(student4);                   // original, unchanged
console.log(updated);                    // copy with cgpa added

// ===== reduce =====
const prices = [100, 250, 75];
const totalPrice = prices.reduce((sum, price) => sum + price, 0);
console.log(totalPrice);                 // 425

// ===== Challenge 5: average cgpa =====
const students = [
    { id: 1, name: "Henok", cgpa: 3.5 },
    { id: 2, name: "Jabir", cgpa: 2.1 },
    { id: 3, name: "Eyob", cgpa: 3.8 }
];

const totalCgpa = students.reduce((sum, student) => sum + student.cgpa, 0);
const averageCgpa = totalCgpa / students.length;
console.log(`Average CGPA: ${averageCgpa.toFixed(2)}`);   // 3.13

// ===== Mini project: baby API functions =====
function getAllStudents() {
    return students;
}

function getStudentById(id) {
    const found = students.find((student) => student.id === id);
    return found || null;
}

function addStudent(newStudent) {
    return [...students, newStudent];
}

console.log(getAllStudents());
console.log(getStudentById(2));          // Jabir
console.log(getStudentById(99));         // null

const newList = addStudent({ id: 4, name: "Pinael", cgpa: 3.2 });
console.log(newList.length);             // 4
console.log(students.length);            // 3, the original is untouched
console.log(newList);