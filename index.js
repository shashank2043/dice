const button1=document.getElementById("button1");
const label1=document.getElementById("label1");

let rannum;
let min=1,max=6;
button1.onclick = function(){
    rannum=Math.floor(Math.random()*max)+min;
    label1.textContent=rannum;
}