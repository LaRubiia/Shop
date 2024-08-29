const header=document.querySelector(".header")
const footer=document.querySelector(".footer")
const main=document.querySelector(".main")
const cardBg=document.querySelectorAll(".card")
let color ="";
let textColor=""
if (localStorage.getItem("bg-color")!== null) {
    color=localStorage.getItem("bg-color")
    textColor=localStorage.getItem("text-color")
    header.style.background=color
    footer.style.background=color
    main.style.background=color
    header.style.color=textColor
    footer.style.color=textColor
    main.style.color=textColor
}

function choiseDark(){
    header.style.background="black" 
    header.style.transition="1s ease-out 0.5s"
    header.style.color="white"
    footer.style.background="black"
    footer.style.transition="1s ease-out 0.5s"
    footer.style.color="white"
    main.style.background="black"
    main.style.transition="1s ease-out 0.5s" 
    main.style.color="white"
    cardBg.style.backgroundColor="black"
    cardBg.style.transition="1s ease-out 0.5s"
    cardBg.style.color="white"
    

    localStorage.setItem("bg-color","black")
    localStorage.setItem("text-color","white")
}
function choiseWhite(){
    header.style.background="white" 
    header.style.transition="1s ease-out 0.5s"
    header.style.color="black"
    footer.style.background="white"
    footer.style.transition="1s ease-out 0.5s"
    footer.style.color="black"
    main.style.background="white"
    main.style.transition="1s ease-out 0.5s" 
    main.style.color="black" 
    cardBg.style.backgroundColor="white"
    cardBg.style.transition="1s ease-out 0.5s"
    cardBg.style.color="black"
    localStorage.setItem("bg-color","white")
    localStorage.setItem("text-color","black")
    
}

