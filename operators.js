const Greeting="Hello Baby!";
console.log ( Greeting);

// let n=9;
// let f=5;
// console.log (n ,typeof n);
// console.log (f ,typeof f);

// console.log ("n+f = ",n+f);
// console.log ("n-f = ",n-f);
// console.log ("n*f = ",n*f);
// console.log ("n/f = ",n/f);       // n/f =  0.8571428571428571
// console.log ("n % f = ",n%f);
// console.log ("n**2 = ",n**2);




// console.log( 7=='7');       // it will check the basically only the value 
// console.log( 7==="7");    //it will strictly checks the condition value equal along with its data type 
// let x= false;
// console.log( 0 == x);



//  arthemic operators

//  console.log (n &f ) ;
//  console.log (n |f ) ;
//  console.log (n ^ f ) ;
//  console.log (n>>3 );   // >> for right shift and value how many position ot right shift  -----. for dividing by 2 
//  console.log (n<<3);   // >> for left shift and value how many position to left shift  -----> for multipying byy 2 




// ternary operator 
// let age =51;
// let mesagge =(age>=18 ) ? " You can Vote!"  : "You cannot vote yet.";
// console.log ( mesagge);
// let a=0.2
// let b=0.1
// console.log( 0.1+0.2);     //-->0.30000000000000004



// type casting and conversion:

//convertion to string ;

// let a=123 ;
//  console.log(String (a));
// let j = true; console.log(String (j));
// let k=null; console.log(k);
//  console.log(String(k));


// conversion to Number

// let str = "99.5";let num = Number(str);
// console.log ( num,typeof num)     // 99.5
// let strSpaces = "   100   ";let numSpaces = Number(strSpaces); 
// console.log ( numSpaces,typeof numSpaces)// 100
// let invalidStr = "apple";
// let notANumber = Number(invalidStr); 
// console .log (notANumber)// NaN
// console.log(Number(true))   // 1
// console.log(Number(false))   //0
// console.log(Number(null))   //0



// parse store till that non dataype Come

// console.log (parseInt("123px"));         //123          store till non int come 
// console.log (parseFloat("3.14em"));     // 3.14         store till non int come 





// conversion to bool 
// console.log(Boolean(0));          // false
// console.log(Boolean(""));         // false
// console.log(Boolean(null));       // false
// console.log(Boolean(undefined));  // false
// console.log(Boolean(NaN));        // false

// Everything else is truthy!
// console.log(Boolean(100));                     // true
// console.log(Boolean("hello"));                 // true               
// console.log(Boolean("false"));                 // true (a non-empty string is truthy)
// console.log(Boolean([]));                      // true (an empty array is an object, and is truthy)
// console.log(Boolean({}));                      // true (an empty object is truthy)




// console.log (null==undefined);           //  ---> trueexception 


//- **Rule 5: Object and Primitive.**
  //  - If one operand is an object and the other is a string, number, or symbol, convert the object to a primitive (by calling valueOf() then toString()) and re-compare.





//   conditional statement

// if else 

let score = 85;
let grade;
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else if (score >= 70) {
  grade = 'C';
} else if (score >= 60) {
  grade = 'D';
} else {
  grade = 'F';
}
console.log(`Your grade is: ${grade}`);




