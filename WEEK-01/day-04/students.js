const students =[
    {id:3,name:"Bruce banner",cgpa:3.98},
    {id:4,name:"Tony stark",cgpa:3.89},
    {id:5,name:"Steve rogers",cgpa:3.08},
    {id:6,name:"natasha romanoff",cgpa:3.67},
    {id:7,name:"vision",cgpa:3.99999999999}
];
function getAllStudents(){
    return students;
}
function getStudentById(id) {
    return students.find((student) => student.id === id) || null;
}
function getTopStudents(minCgpa) {
    return students.filter((student) => student.cgpa >= minCgpa);
}

module.exports = { getAllStudents, getStudentById, getTopStudents };

