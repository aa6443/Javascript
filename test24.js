// foreach and for in
const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
} 

//for in can be used for objects
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}