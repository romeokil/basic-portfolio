//for hamburger menu
let menubtn=document.getElementById("menu");
let clsoebtn=document.getElementById("close");

menubtn.addEventListener('click',()=>{
    menubtn.style.display="none";
    clsoebtn.style.display="block";
})
clsoebtn.addEventListener('click',()=>{
    clsoebtn.style.display="none";
    menubtn.style.display="block";
})

