var card = document.querySelector(".login-card")
var loginbtn =document.querySelector(".login-btn")
var close = document.querySelector(".card-close")
var overlay=document.getElementById("overlay")
var copy1=document.querySelector(".copybutton1")
var copy2=document.querySelector(".copybutton2")
var copy3=document.querySelector(".copybutton3")



loginbtn.onclick=function(){
    card.style.display="flex"
    overlay.style.display="flex"
   
}
close.onclick=function(){
    card.style.display="none"
    overlay.style.display="none"

}
copy1.onclick=function(){
 copy1.title="copied"
 alert("تم نسخ النص ")
}
copy2.onclick=function(){
 copy2.title="copied"
 alert("تم نسخ النص ")
}
copy3.onclick=function(){
 copy3.title="copied"
 alert("تم نسخ النص ")
}

