let menu = document.getElementById("menu")
let menubar = document.querySelector(".menubar")
let cross = document.getElementById("cross")
menu.onclick=()=>
{
    menubar.style.display="block"
}
cross.onclick = ()=>
{
    menubar.style.display = "none"
}