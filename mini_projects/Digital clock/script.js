const parent=document.getElementById('parent');
parent.addEventListener('click',(e)=>{
    const child= e.target;
    const body =document.querySelector('body');
    body.style.backgroundColor=child.id;
    body.style.color=child.className;
    


})
const div=document.getElementById('clock');

setInterval(()=>{
    let time=new Date();
    div.textContent = time.toLocaleTimeString('en-US',{
            hour12: true
    });
},1000)