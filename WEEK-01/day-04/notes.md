# Day 04 Notes

## What I learned today

Today I learned more about Node.js and how to make a simple command-line program.

At first, I worked with `require` and `module.exports`. I learned that I can put my functions in one file, like `students.js`, and then import them into `app.js`.

For example:

```javascript
const { getAllStudents, getStudentById } = require("./students");
```

I also learned about `process.argv`. This is how I can get information that I type after the command in the terminal.

For example:

```bash
node app.js find 4
```

Here, `find` is one argument and `4` is another argument.

I used:

```javascript
process.argv[2]
process.argv[3]
```

to get those values.

## What I did with the student app

I made different commands for my student data.

### List

```bash
node app.js list
```

This shows all the students.

### Find

```bash
node app.js find 4
```

This searches for a student using their ID.

I also learned that I should check the input before using it.

For example, if I don't give an ID:

```bash
node app.js find
```

the program tells me to give an ID.

And if I type something like:

```bash
node app.js find abc
```

it tells me that the ID must be a number.

## Top students

I also added a `top` command.

```bash
node app.js top 3.9
```

This shows students whose CGPA is 3.9 or higher.

I used `filter()` for this:

```javascript
function getTopStudents(minCgpa) {
    return students.filter((student) => student.cgpa >= minCgpa);
}
```

Then I used `forEach()` to print the students.

I also learned how to check if the result is empty using:

```javascript
top.length === 0
```

## Problems I had

One problem I had was forgetting to import `getTopStudents` into `app.js`.

I had the function in `students.js`, but I forgot to add it here:

```javascript
const {
    getAllStudents,
    getStudentById,
    getTopStudents
} = require("./students");
```

After adding it, the `top` command worked.

I also had an incomplete `find` command where the program was only saying:

```text
Looking up student...
```

I changed it so that it actually searches for the student and shows the result.

## Commands I practiced

```bash
node app.js list
node app.js find
node app.js find abc
node app.js find 4
node app.js find 99
node app.js top 3.9
node app.js top 5
node app.js top abc
node app.js top
```

## What I understand now

Today I understand `process.argv` much better than before.

I also understand how different files can work together using `require` and `module.exports`.

The main thing I learned is that I should not just assume the user will enter the correct input. I need to check it first and then run the actual operation.

Today was a little long, but I feel like I'm starting to understand how command-line programs work.

Day 04 done. 
