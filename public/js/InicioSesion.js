const muestraC=document.getElementById("contra")
const eye=document.getElementById("eye1")
const btn = document.querySelector(".btn")

eye.onclick=(()=>{
    if(muestraC.type==="password"){
        muestraC.type="text"
        eye.classList.add("hide-btn")
    }else{
        muestraC.type="password"
        eye.classList.remove("hide-btn")
    }
})
