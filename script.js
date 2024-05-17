let menuBtn=document.querySelector("#menu-btn")
let myMobileMenuItem=document.querySelector("#mobile-menu-item")
menuBtn.addEventListener("click",()=>{
    myMobileMenuItem.style.display=="block"?myMobileMenuItem.style.display="none":myMobileMenuItem.style.display="block"
})