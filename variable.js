console.log("print it");
if(true){
let name="saurabh";
console.log(name);
name= "lal";
console.log(name);    //--. can be re defined 

}
// console.log(name);      -->canot acees aoutside blocks 
let count;
count=0;



if(true){
    const greeting ="hii";
    console.log(greeting);

    // greeting="heloo"; connot be redefined 
 
}
// console.log(greeting);      ---> ReferenceError: greeting is not defined
//it is a blocked scope same as let

if (1){
var i=9;

i=0;}
console.log(i);


//fuction scoped  can be re defined 








