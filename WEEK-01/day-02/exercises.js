// ====== for loop ======
/*for (let i=0; i< 30; i++){

    if (i %2 === 0){
   console.log(`Numbers:  ${i}`);
    }
}*/
// ===== looping over an array====
const students =["jose","maria","alberto","luca","enoch"];
for (let i=0; i < students.length; i++){
    console.log(`${i+1}. ${students[i]}`);
} 
students.forEach((student, index) => {
    console.log(`${index + 1}. ${student}`);
});
// ====== mapping ======
const upper = students.map ((student) => student.toUpperCase());
console.log(upper);
const lower = students.map ((student) => student.toLocaleLowerCase());
console.log(lower);
//====== filter ======
const number =[34,565,7758,89684,87456984,987465,9856];
const big = number.filter((n) => n>5476);
console.log(big);
// ====== find ========
const people =[
    {id : 3, name: "HEnok mike",cgpa : 3.87},
    {id : 4, name: "Alexandra Petrovich",cgpa : 3.907},
    {id : 5, name: "michael douglus",cgpa : 3.509},

];
const found = people.find((person) => person.id === 4);
const pass = people.filter((person) => person.cgpa >= 3.5);
const names = people.map((person) => person.name);

console.log(found.name);
console.log(names);
console.log(found);
console.log(pass);
const nums = [1, 2, 3, 4, 5, 6];
const doubledEvens = nums.filter((n) => n % 2 === 0).map((n) => n * 2);
console.log(doubledEvens);   
const student = people.find((person) => person.id === 89);

if (student) {
    console.log(student.name);
} else {
    console.log("Student not found");
}
const topNames = people
    .filter((person) => person.id = 4)
    .map((person) => person.name);

console.log(topNames);