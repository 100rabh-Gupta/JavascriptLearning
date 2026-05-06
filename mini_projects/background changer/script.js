const parent=document.getElementById('parent');
parent.addEventListener('click',(e)=>{
    const child= e.target;
    const body =document.querySelector('body');
    body.style.backgroundColor=child.id;
    body.style.color=child.className;
    




})
const form= document.querySelector('form');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const boy=document.getElementById('boy');
    const girl=document.getElementById('Girl');
    const l1=boy.value.length;
    const l2=girl.value.length;
    const result= Math.pow(l1+l2,3)%101;
    document.querySelector('h4').textContent= `Result : ${result}`;

}) 