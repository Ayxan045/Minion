 'use strict'

var balls=document.getElementsByClassName("ball")
document.onmousemove=function(){
    var x=event.clientX*100/window.outerWidth+"%"
    var y=event.clientY*100/window.outerHeight+"%"
    for(var i=0;i<balls.length;i++){
        balls[i].style.left=x
        balls[i].style.top=y
        balls[i].style.transform="translate(-"+x+",-"+y+")"
    }
}
document.getElementById("eyes").addEventListener("click",function(){
    document.querySelector(".w-ball").classList.toggle("ball-active")
})