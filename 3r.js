const Greeting="Hello Baby!";
console.log ( Greeting);


// loops

//for loop

// let n=8;
// for ( let i=1;i<n;i++){
//     console.log (i);
// }


// while loop

// let m=8;
// while(m--){
//     console.log (m);
// }


// Number
// let a= 8.97;
// let billion=1e9;
// console.log(billion);
// console.log(Math.floor(a)
// );
// console.log(Number.isFinite(0/0));
// console.log(isNaN("true"));


// toString
// let b=897;
// console.log(b,toString());
// console.log(b,toString(16));
// console.log(b,toString(2));

// let c=9.9848
// console.log(c.toPrecision(4))    //9.985
// console.log(c.toFixed(2))     //9.98

// console.log(Math.ceil(c));      //round upto nearest integer  10
// console.log(Math.floor(c));    //return integer value remove decimal psart 9
// console.log(Math.round(c));     //round off 10
// console.log(Math.trunc(c));       // remove decimal part 




// random   --> it give a number between 0 to 1 ;


// console.log ( Math.random());


// a genrating a no 
// range = end-start+1;

// console.log ( Math.floor((Math.random()*11)+15));   // no between 15 - 25 integer value 



function getRandomInt(min, max) {
  // 1. Calculate the number of possible outcomes (the size of our range).
  const range = max - min + 1;

  // 2. Scale up Math.random() to create a float in the range [0, range).
  const scaled = Math.random() * range;

  // 3. Round down to get an integer in the range [0, range-1].
  const floored = Math.floor(scaled);

  // 4. Shift the range up to [min, max] by adding the minimum value.
  const result = floored + min;

  return result;

}
console.log("Random number between 1 and 10:", getRandomInt(1, 10));
console.log("Random number between 50 and 100:", getRandomInt(50, 100));
console.log("Random dice roll (1 to 6):", getRandomInt(1, 6));














