// =======Json.stringfy and Json.parsed======
const students = [
    { id: 1, name: "Henok", cgpa: 3.8 },
    { id: 5, name: "Lucinda", cgpa: 3.4 },
    { id: 9, name: "Jacob", cgpa: 3.53 },
    { id: 8, name: "Tamara", cgpa: 3.65 }

];


const text = JSON.stringify(students);
console.log(text);
console.log(typeof text);

const parsed = JSON.parse(text);
const good = parsed.filter((student) => student.cgpa >= 3.5);
good.forEach((student) =>{
    console.log (`${student.id}. ${student.name} (${student.cgpa})`);
});
console.log(typeof good);