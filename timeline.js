var desert = document.querySelector("section .desert");
var slider = document.querySelector(".slider");

var tl = new TimelineMax();

tl.fromTo(desert,1.5,{height:"0"},{height:"100%",borderRadius:"5px",ease : Power2.easeInOut })
.to(desert,1.5,{marginLeft:"10%", width:"80%",ease : Power2.easeInOut })
.to(".comment",1.5,{x:"100px ",ease : Power2.easeInOut })
.fromTo(".slider",1.5,{width:"0%"},{width:"100%",ease : Power2.easeInOut });
setTimeout(function()
{
    tl.to(".slider",3,{backgroundImage: "linear-gradient(to right ,rgb(250, 221, 165) , rgb(255, 219, 146) ,rgb(255, 211, 123) )"
    ,ease : Power4.easeInOut});
    
},7000);