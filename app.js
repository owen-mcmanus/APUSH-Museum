window.onscroll = function() {scrollFunction()};
navbar = document.querySelector(".navbar");
let r = 41;
let b = 47;
let g = 54;
function scrollFunction() {
  if (document.documentElement.scrollTop < 770) {
    navbar.style.backgroundColor  = "rgba(41, 47, 54, 0.15)";
    navbar.style.color  = "rgb(41, 47, 54)";
    r = 41
    b = 47
    g = 54
  }else if(document.documentElement.scrollTop < 1250){
    let scrollpos = (document.documentElement.scrollTop - 770)/478

    navbar.style.backgroundColor  = "rgba(41, 47, 54," + (scrollpos+.15)/1.15 + ")";
    r = scrollpos*(255-41)+41
    b = scrollpos*(255-47)+47
    g = scrollpos*(255-54)+54

    navbar.style.color  = `rgb(${r}, ${b}, ${g})`;
  }else { // 1250
    navbar.style.backgroundColor  = "rgba(41, 47, 54, 1)";
    navbar.style.color  = "#ffffff";
  }
}