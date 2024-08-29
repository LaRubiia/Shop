var buyf=false;
function buy() {
    if(!buyf){console.log("123")
        document.getElementById("btn").style.background="green";
        document.getElementById("btn").innerHTML="В Корзине"
        document.getElementById("btn").style.color="white"
        buyf=true;
}
else{
    document.getElementById("btn").style.background="white";
        document.getElementById("btn").innerHTML="Купить"
        document.getElementById("btn").style.color="black"
        buyf=false;
}
}