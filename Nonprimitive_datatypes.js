const Greeting="Hello Baby!";
console.log ( Greeting);

// The Object Type (Non-Primitive)



//object------->typeof object is object
// let person={
// firstName:"100rabh",
// lastName:"Gupta",
// age:21,
// gender: "male"
// }

// let name=person.firstName+ " "+ person.lastName;
// let intro=`I am ${name}, I am ${person.age} years old.`;
// console.log (intro);
// console.log(typeof person);




//array or can we say list 

// let arr=[1,2,5,8];
// let hero =["krish","Batman","Thor","Hulk"];
// console.log (arr);
// console.log (hero);




//fuction
// function fun (){
//     console.log("Enjoy");
    
// }

// fun();

let obj1 = {
     value: 10 
    };
                                                 // The reference to the object is copied into obj2
 let obj2 = obj1;                              // Both obj1 and obj2 now point to the exact same object in memory
obj2.value = 20;                                // We are modifying the object through obj2
console.log(obj1.value);                            // Outputs: 20 (obj1 is affected because it points to the same object)
console.log(obj2.value);                                // Outputs: 20

