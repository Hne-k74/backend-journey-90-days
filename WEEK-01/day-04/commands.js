/*const command = process.argv[2];

switch (command) {
    case "hello":
        console.log("Hello there!");
        break;
    case "bye":
        console.log("See you later!");
        break;
    default:
        console.log("Unknown command. Try: hello, bye");
}*/
const command = process.argv[2];
 switch(command){
    case "hello":
        console.log("hello");
        break;
    case "time":
        console.log(new Date().toLocaleTimeString());
        break;
    case "bye":
        console.log("chaio");
        break;
    case "crush":
        console.log("ILVU");
        break;
    default:
        console.log("404 unkown error Try: crush,if you are a girl");
 }





