const autobutton=document.getElementById("auto-btn");
const lightbutton=document.getElementById("light-btn");
const darkbutton=document.getElementById("dark-btn");

lightbutton.addEventListener("click",()=>{
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
})
darkbutton.addEventListener("click",()=>{
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
})

autobutton.addEventListener("click",()=>{
document.body.classList.toggle("dark-mode");
document.body.classList.toggle("light-mode");
})