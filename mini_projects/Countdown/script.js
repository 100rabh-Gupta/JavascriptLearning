setInterval(()=>{


const result= document.getElementById('result');
const currentTime= Date.now();
const bthTime=new Date(2026,6,04).getTime();
let timer=bthTime-currentTime;

const day=Math.floor(timer/(1000*60*60*24));
timer%=(1000*60*60*24);
const hour=Math.floor(timer/(1000*60*60));
timer%=(1000*60*60);
const minute=Math.floor(timer/(1000*60));
timer%=(1000*60);
const second=Math.floor(timer/(1000));
timer%=(1000);

result.textContent =`${day} : ${hour} : ${minute} : ${second}`
},1000);

