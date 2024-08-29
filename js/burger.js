const nav=document.querySelector(".nav__list")
const burger=document.querySelector(".burger")
const navItem=document.querySelectorAll(".nav__item")
function burgerClick() {
    nav.classList.toggle("nav__list_active")
    burger.classList.toggle("active")
    navItem.forEach((link,index)=>{
        console.log(index)
        if(link.style.animation){
            link.style.animation=""
        }
        else{link.style.animation=`navLinkAnim 2s ease forwards ${index/7+0.3}s`}
    })
} 