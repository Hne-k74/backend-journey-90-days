// ========= Student information =========
const student ={
    fullName:"Henok Michael",
    age:21,
    id:486,
    department:"Software Engineering",
    email:"Henokm00745678cds@gmail.com",
    cgpa:3.5,
    year:4,
    phone:"0934567890"
};
       function isEligibleForInternship(student) {
    if( student.cgpa >= 2.5 &&  student.year  >= 3){
        return true;
    }
    else{
        return false;
    }
}
function dispalyStudent(student){
    console.log("========= Student information =========");
    console.log(`Name: ${student.fullName}`);
    console.log(`Age: ${student.age}`);
    console.log(`Id: ${student.id}`);
    console.log(`Department: ${student.department}`);
    console.log(`Email: ${student.email}`);
    console.log(`Cgpa: ${student.cgpa}`);
    console.log(`Semester year: ${student.year}`);
    console.log(`Phone number: ${student.phone}`);

}
dispalyStudent(student);
console.log(`${student.fullName} is eligible for internship : ${isEligibleForInternship(student)}`);