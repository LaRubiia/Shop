const video=document.getElementById("myVideo")
const playStop=document.getElementById("play")
const muteOnmute=document.getElementById("mute")
const playList=["Video1","Video2","Video3"]
const nameList=["Как производят молоко , все о молоке.","Какое молоко полезнее?Плючы и минусы каждого молока.","Все о молосных продуктах."]
const textList=["Как производят молоко , все о молоке.","Все минусы и плюсы каждого молока","Все о молочных продуктах"]
const videoName=document.querySelector(".video__name")
const videoText=document.querySelector(".video__text")
let number=0
let a=10
let b=5
function play(){
    if(video.paused){
        video.play()
        playStop.innerHTML="pause"
    }
    else{
        video.pause()
        playStop.innerHTML="play"
    }
    
}
function mute(){
    if(video.muted){
        video.muted=false;
        muteOnmute.innerHTML="off"
    }
    else{
        video.muted=true;
        muteOnmute.innerHTML="on"
    }
} 
function next(){
    if(number<playList.length-1){
        number=number+1
    }
    else {
        number=0
    }
    video.src=`video/${playList[number]}.mp4`
    videoName.innerHTML=nameList[number]
    videoText.innerHTML=textList[number]
    
}
function prev(){
    if(number!=0){
        number=number-1
    }
    else {
        number=playList.length-1
    }
    video.src=`video/${playList[number]}.mp4`
    videoName.innerHTML=nameList[number]
    videoText.innerHTML=textList[number]
}
