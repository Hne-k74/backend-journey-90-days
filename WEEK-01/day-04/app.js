const { getAllStudents, getStudentById, getTopStudents } = require("./students");
const command = process.argv[2];
 switch(command){
    case "list":
    const all = getAllStudents();
        all.forEach((student) =>{
console.log(`${student.id}. ${student.name} ${student.cgpa}`)
        });
        break;
            case "find": {
        const input = process.argv[3];
const id = Number(input);

if (input === undefined) {
    console.log("Please give an id. Example: node app.js find 4");
} else if (Number.isNaN(id)) {
    console.log("The id must be a number.");
} else {
    const student = getStudentById(id);

    if (student) {
        console.log(`${student.id}. ${student.name} (${student.cgpa})`);
    } else {
        console.log("Student not found");
    }
}

        break;
    }
        case "top": {
        const input = process.argv[3];
        const min = Number(input);

        if (input === undefined || Number.isNaN(min)) {
            console.log("Please give a number. Example: node app.js top 3.5");
            break;
        }

        const top = getTopStudents(min);

        if (top.length === 0) {
            console.log(`No students with cgpa ${min} or higher.`);
        } else {
            top.forEach((student) => {
                console.log(`${student.id}. ${student.name} (${student.cgpa})`);
            });
        }
        break;
    }
        default:
            console.log("Unknown command. Try: list");
}
