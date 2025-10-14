/*let a = prompt("Hey whats is your age");
a = Number.parseInt(a) // convert string into number

if(a > 30){
    alert("this is a valid age " + a);
} else (
    alert("this is a Invalid age " + a)
)*/

let marks = {
    harry: 90,
    bharat: 85,    
    pinky: 88,
    rohan: 65
}

// problem 1
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}
// problem 2
console.log("New Type")
for (let key in marks) {    
    console.log("The marks of " + key + " are " + marks[key])
}

let Boy1 = "Rohan"
let Boy2 = "Sohan"

let sentance = `${Boy1} is the friend of ${Boy2}`; // this is template 
console.log(sentance);