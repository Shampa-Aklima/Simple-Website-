let myMobileMenu=document.querySelector("#my-mobile-menu")
let myMobileMenuItem=document.querySelector("#myMobileMenuItem")
myMobileMenu.addEventListener("click",()=>{
    myMobileMenuItem.style.display=="block"?myMobileMenuItem.style.display="none":myMobileMenuItem.style.display="block"
})