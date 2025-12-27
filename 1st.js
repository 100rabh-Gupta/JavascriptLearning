
// let fullName = prompt("Enter your full name" );

// let username = "@"+ fullName + fullName.length;
// console.log(username);
 

let prices=[250,645,300,900,50];
let idx=0;
for(let val of prices){
       val=0.9*val;
       prices[idx]=val;
       idx++;
}
console.log('Offerd prices are',prices);
