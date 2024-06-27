//Imagine that you are given an array of objects.  For example,

var users = [
  { name: "Michael", age: 37 },
  { name: "John", age: 30 },
  { name: "David", age: 27 },
];

// // How would you print/log John's age? console.log(users[1]["age"]); // output: 30

// // How would you print/log the name of the first object?
console.log(users[0]["name"]); // output: Michael

// // How would you print/log the name and age of each user using a for loop?

for (let i = 0; i < users.length; i++) {
  console.log(`${users[i]["name"]} - ${users[i]["age"]}`);
}

/*
Desired Output:

Michael - 37
John - 30
David - 27
*/
