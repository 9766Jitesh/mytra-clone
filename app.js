const mendiv=document.getElementById("mendiv");
const column=document.getElementById("column");
const row=document.getElementById("row");
const men=document.getElementById("men");
const women=document.getElementById("women");
const womendiv=document.getElementById("womendiv");


function menMouseOver(){
    mendiv.style.display="block";
    men.style.cursor="pointer";
    row.style.position="absolute";
    column.style.position="relative";  
}
function menMouseOut(){
    mendiv.style.display="none";
    men.style.cursor="arrow";
}
men.addEventListener('mouseover',menMouseOver);
men.addEventListener('mouseout',menMouseOut);
function womenMouseOver(){
    womendiv.style.display="block";
    womendiv.style.border="10px red";
    women.style.cursor="pointer";
    row.style.position="absolute";
    column.style.position="relative";  
}
function womenMouseOut(){
    womendiv.style.display="none";
    women.style.cursor="arrow";
}
women.addEventListener('mouseover',womenMouseOver);
women.addEventListener('mouseout',womenMouseOut);