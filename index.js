var con = document.querySelector(".main")
var icon = document.querySelector("i")

con.addEventListener("dblclick", ()=>{
    setTimeout(()=> {
        icon.style.transform = "translate(-50%,-50%) scale(1)"
        icon.style.opacity = "0.8"
    },500)
   

    setTimeout(()=>{
       icon.style.transform = "translate(-50%,-50%) scale(0)" 
       icon.style.opacity = "0"
    }, 1500)
}) 