window.onscroll = function() {scrollFunction()};
navbar = document.querySelector(".navbar");
let r = 41;
let b = 47;
let g = 54;
function scrollFunction() {
  let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

  if (scrollTop < 900) {
    navbar.style.backgroundColor  = "rgba(41, 47, 54, 0.15)";
    navbar.style.color  = "rgb(41, 47, 54)";
    r = 41
    b = 47
    g = 54
  }else if(scrollTop < 1000){
    let scrollpos = (scrollTop - 900)/100

    navbar.style.backgroundColor  = "rgba(41, 47, 54," + (scrollpos+.15)/1.15 + ")";
    r = scrollpos*(255-41)+41
    b = scrollpos*(255-47)+47
    g = scrollpos*(255-54)+54

    navbar.style.color  = `rgb(${r}, ${b}, ${g})`;
  }else { 
    navbar.style.backgroundColor  = "rgba(41, 47, 54, 1)";
    navbar.style.color  = "#ffffff";
  }
}




let btn = document.getElementById("close");
let awsBanner = document.getElementById("AWS");

btn.addEventListener("click", (e)=>{
awsBanner.style.display = "none";
e.stopPropagation();
});
awsBanner.addEventListener("click", ()=>location.href = "https://www.amazon.com/");

let add = document.querySelector('.add')
let addIcon = document.querySelector('.add img')
let xandr = document.querySelector('.xandr-div')
let xandrClose = document.querySelector('.xander-close ')
add.addEventListener("click", ()=>location.href = "https://www.nestle.com/brands/water");
addIcon.addEventListener("click", (e)=>{e.stopPropagation();xandr.style.display = "block";addIcon.style.display="none"});
addIcon.addEventListener("mouseover", ()=>addIcon.src = "https://choices.trustarc.com/get?name=admarker-full-tr.png");
addIcon.addEventListener("mouseout", ()=>addIcon.src = "https://choices.trustarc.com/get?name=admarker-icon-tr.png");
xandrClose.addEventListener("click", (e)=>{e.stopPropagation();xandr.style.display = "none";addIcon.style.display="block"});