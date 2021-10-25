// Task 1:
const numArray = [10, 21, 30, 24, 25];
console.log ( numArray[0] + numArray[1] + numArray[2] + numArray[3] + numArray[4])

// Task 2:
let userinfoArray= [
    {
    name: "Bolton",
    age: 25, 
    adress: "London"
    },
    {
    name: "Corin",
    age: 15, 
    adress: "Cairo"
    },
    {
    name: "Ida", 
    age: 60, 
    adress: "Cusco"
    },
    ]

// Task 3:
// Concatenation with "+" operation
console.log("My name is " + userinfoArray[0]["name"])
console.log("My age is " + userinfoArray[0]["age"])
console.log("My address is" + userinfoArray[0]["adress"])

// Task 4:
if (userinfoArray[0]["age"] < 19) {
    console.log("I am a teenager");
}else {
    console.log("I am an adult");
}

if (userinfoArray[1]["age"] < 19) {
    console.log("I am a teenager");
}else {
    console.log("I am an adult")
}    

if (userinfoArray[2]["age"] < 19) {
    console.log("I am a teenager");
}else {
    console.log("I am an adult")}