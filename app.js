const row=document.getElementById("row");
const column=document.getElementById("column");
const men=document.getElementById("men");
const sec1=document.getElementById("section1");

function mouseOver(){
    row.style.display="block";
    row.style.position="absolute";
    men.style.cursor="pointer";
    console.log(column);
    column.style.position="relative";
    
    
    
}
function mouseOut(){
    row.style.display="none";
    men.style.cursor="arrow";
    console.log(sec1.style.position);
   

}
men.addEventListener('mouseover',mouseOver);
men.addEventListener('mouseout',mouseOut);