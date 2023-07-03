document.addEventListener("DOMContentLoaded", function() {

const { text } = require("express");

const movPag = document.querySelector(".movPag");
const btn_adelante2 = document.querySelector(".sigPag");

const btn_atras1 = document.querySelector(".atrasp1");
const btn_adelante3 = document.querySelector(".adelantep2");

const btn_atras2 = document.querySelector(".atrasp2");
const btn_adelante4 = document.querySelector(".adelantep1");

const btn_atras3 = document.querySelector(".atrasp3");
const btn_fin = document.querySelector(".fin");

const progressText=document.querySelectorAll(".paso p");
const progressCheck=document.querySelectorAll(".paso .check");
const num=document.querySelectorAll(".paso .num");

const muestraC1=document.getElementById("psswd")
const muestraC2=document.getElementById("psswdR")
const eye1=document.getElementById("eye1")
const eye2=document.getElementById("eye2")

let max = 4; /*maximo de paginas creadas*/
let cont=1;

//Aparicion de ventanas
const card2List = document.querySelectorAll(".card2");
let currentCardIndex = 0;

function showCurrentCard() {
  card2List[currentCardIndex].style.display = "block";
}

function hideCurrentCard() {
  card2List[currentCardIndex].style.display = "none";
}

function showNextCard() {
  hideCurrentCard();
  currentCardIndex++;
  if (currentCardIndex >= card2List.length) {
    currentCardIndex = 0;
  }
  showCurrentCard();
}

// Mostrar la primera tarjeta al cargar la página
showCurrentCard();

// Escuchar el evento del botón "Siguiente" en cada tarjeta
const nextButtons = document.querySelectorAll(".card2 .sigPag");
nextButtons.forEach((button) => {
  button.addEventListener("click", showNextCard);
});

//PROGRESO
function updateProgress(currentIndex) {
    progressText.forEach((text, index) => {
      if (index === currentIndex) {
        text.classList.add("active");
      } else {
        text.classList.remove("active");
      }
    });
  
    progressCheck.forEach((check, index) => {
      if (index === currentIndex) {
        check.classList.add("active");
      } else {
        check.classList.remove("active");
      }
    });
  
    num.forEach((number, index) => {
      if (index === currentIndex) {
        number.classList.add("active");
      } else {
        number.classList.remove("active");
      }
    });
  }
  
  // Llamar a la función para mostrar el progreso inicial
  updateProgress(currentCardIndex);


//BOTONES

btn_adelante2.addEventListener("click", function(e){
e.preventDefault();

let name=ValidaNombre();
let lastname1=ValidaApellidoP();
let curp=ValidaCurp();
let sex=ValidaSexo();

   if(name===true && lastname1===true && curp===true && sex===true){   
        movPag.style.marginLeft = `calc(-58vh * ${cont})`;
        num[cont - 1].classList.add("active");
        progressText[cont - 1].classList.add("active");
        progressCheck[cont - 1].classList.add("active");
        cont+=1;
   }
});

btn_atras1.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = `calc(-58vh * ${cont - 2})`;
    num[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    cont-=1;
});

btn_adelante3.addEventListener("click", function(e){
    e.preventDefault();
    let country=ValidarPais();
    let state=ValidarEstado();
    let CP=ValidarCP();

    if(country===true && state===true && CP===true){
    movPag.style.marginLeft = `calc(-58vh * ${cont})`;
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont+=1;
    }
});

btn_atras2.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = `calc(-58vh * ${cont - 2})`;
    num[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    cont-=1;
});

btn_adelante4.addEventListener("click", function(e){
    e.preventDefault();
    let cellphone=ValidaCelular();
    let email=ValidaEmail();

    if(cellphone===true && email===true){
    movPag.style.marginLeft = `calc(-58vh * ${cont})`;
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    cont+=1;
    }
});

btn_atras3.addEventListener("click", function(e){
    e.preventDefault();
    movPag.style.marginLeft = `calc(-58vh * ${cont - 2})`;
    num[cont - 2].classList.remove("active");
    progressText[cont - 2].classList.remove("active");
    progressCheck[cont - 2].classList.remove("active");
    cont-=1;
});

btn_fin.addEventListener("click", function(e){
    e.preventDefault();
    let user=ValidarUsuario();
    let psswd=validarPsswd();
    let psswdR=validarPsswdR();
    let valid=ValidaContras();
    let SQ=ValidarPseg(); 
    let ans=ValidarRespuestaS();

    if(user===true && psswd===true && psswdR===true && valid===true && SQ===true  && ans===true){
    alert("Registro finalizado con exito")
    num[cont - 1].classList.add("active");
    progressText[cont - 1].classList.add("active");
    progressCheck[cont - 1].classList.add("active");
    window.location.href="/login"
    }
});

//validaciones

function ValidaNombre(){
    var nombre=document.getElementById("nombre").value;  
    if(nombre==""){
        document.getElementById("validaNombre").innerHTML="* Campo vacío"
        document.getElementById("nombre").style.borderColor="red"
        return false
    }else{
        let correcto;
        let re = /^[a-zA-Z\u00C0-\u017F\s]{3,100}$/; 
        correcto = nombre.match(re);
        if (!correcto){
            document.getElementById("validaNombre").innerHTML="* Formato incorrecto"
            document.getElementById("nombre").style.borderColor="red"  
            return false
        }
        else{
            document.getElementById("validaNombre").innerHTML=""
            document.getElementById("nombre").style.borderColor="rgb(27, 118, 222)"
            return true
        }
    }
}

function ValidaApellidoP(){
    var apellidoP=document.getElementById("apellidop").value;
    if(apellidoP==""){
        document.getElementById("validaApellidoP").innerHTML="* Campo vacío"
        document.getElementById("apellidop").style.borderColor="red"
        return false
    }else{
        let correcto;
        let re = /^[[a-zA-Z\u00C0-\u017F\s]{3,100}$/;
        correcto = apellidoP.match(re);
        if (!correcto){
            document.getElementById("validaApellidoP").innerHTML="* Formato incorrecto"
            document.getElementById("apellidop").style.borderColor="red"   
            return false
        }
        else{
            document.getElementById("validaApellidoP").innerHTML=""
            document.getElementById("apellidop").style.borderColor="rgb(27, 118, 222)"
            return true
        }
    }
}

function validaDigitoVerificador(curpDigito) {
    var digitos = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
      lngSuma = 0.0,
      lngDigito = 0.0;
    for (var i = 0; i < 17; i++)
      lngSuma = lngSuma + digitos.indexOf(curpDigito.charAt(i)) * (18 - i);
    lngDigito = 10 - lngSuma % 10;
    if (lngDigito == 10) return 0;
    return lngDigito;
  }

function ValidaCurp(){
    var Curp=document.getElementById("CURP").value;
    if(Curp==""){
        document.getElementById("validaCurp").innerHTML="* Campo vacio"
        document.getElementById("CURP").style.borderColor="red"
        return false
    }else{
        let correcto;
        let re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0\d|1[0-2])(?:[0-2]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
        correcto = Curp.match(re);
        if (!correcto){
            document.getElementById("validaCurp").innerHTML="* Formato incorrecto"
            document.getElementById("CURP").style.borderColor="red"  
            return false
        } 
        if (correcto[2] != validaDigitoVerificador(correcto[1])){
            return false;
        }
        else{
            document.getElementById("validaCurp").innerHTML=""
            document.getElementById("CURP").style.borderColor="rgb(27, 118, 222)"
            return true
        }
    }
}

function ValidaSexo(){
    var sexo=document.getElementById("sexo").value; 
    if(sexo==-1){
        document.getElementById("validaSexo").innerHTML="* Seleccione alguna opcion"
        document.getElementById("sexo").style.borderColor="red"
        return false
    }else{
        document.getElementById("validaSexo").innerHTML=""
        document.getElementById("sexo").style.borderColor="rgb(27, 118, 222)"
        return true
    }
}



function ValidarPais(){
    var pais=document.getElementById("pais").value;  
    if(pais==""){
        document.getElementById("validaPais").innerHTML="* Campo vacío"
        document.getElementById("pais").style.borderColor="red"
        return false
    }else{
        let correcto;
        let re = /^[a-zA-Z\u00C0-\u017F\s ]{3,100}$/;
        correcto = pais.match(re);
        if (!correcto){
            document.getElementById("validaPais").innerHTML="* Formato incorrecto"
            document.getElementById("pais").style.borderColor="red"  
            return false
        }
        else{
            document.getElementById("validaPais").innerHTML=""
            document.getElementById("pais").style.borderColor="rgb(27, 118, 222)"
            return true
        }
    }   
}

function ValidarEstado(){
    var estado=document.getElementById("estado").value;  
    if(estado==""){
        document.getElementById("validaEstado").innerHTML="* Campo vacío"
        document.getElementById("estado").style.borderColor="red"
        return false
    }else{
        let correcto;
        let re = /^[a-zA-Z\u00C0-\u017F\s ]{3,100}$/;
        correcto = estado.match(re);
        if (!correcto){
            document.getElementById("validaEstado").innerHTML="* Formato incorrecto"
            document.getElementById("estado").style.borderColor="red"  
            return false
        }
        else{
            document.getElementById("validaEstado").innerHTML=""
            document.getElementById("estado").style.borderColor="rgb(27, 118, 222)"
            return true
        }
    }   
}

function ValidarCP(){
    var cp=document.getElementById("cp").value;  
    if(cp==""){
        document.getElementById("validaCP").innerHTML="* Campo vacío"
        document.getElementById("cp").style.borderColor="red"
        return false
    }else{
        let correcto;
        let re = /^[0-9]{1,5}$/;
        correcto = cp.match(re);
        if (!correcto){
            document.getElementById("validaCP").innerHTML="* Formato incorrecto"
            document.getElementById("cp").style.borderColor="red"  
            return false
        }
        else{
            document.getElementById("validaCP").innerHTML=""
            document.getElementById("cp").style.borderColor="rgb(27, 118, 222)"
            return true
        }
    }   
}


function ValidaCelular(){
    var celular=document.getElementById("celular").value;  
    if(celular==""){
        document.getElementById("validaCelular").innerHTML="* Campo vacío"
        document.getElementById("celular").style.borderColor="red"
        return false
    }else{
        let correcto;
        let re = /^[0-9]{3,10}$/;
        correcto = celular.match(re);
        if (!correcto){
            document.getElementById("validaCelular").innerHTML="* Formato incorrecto"
            document.getElementById("telefono").style.borderColor="red"  
            return false
        }
        else{
            document.getElementById("validaCelular").innerHTML=""
            document.getElementById("celular").style.borderColor="rgb(27, 118, 222)"
            return true
        }
    }   
}

function ValidaEmail(){
    var email=document.getElementById("email").value;  
    if(email==""){
        document.getElementById("validaEmail").innerHTML="* Campo vacío"
        document.getElementById("email").style.borderColor="red"
        return false
    }else{
        let correcto;
        let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        correcto = email.match(re);
        if (!correcto){
            document.getElementById("validaEmail").innerHTML="* Formato incorrecto"
            document.getElementById("email").style.borderColor="red"  
            return false
        }
        else{
            document.getElementById("validaEmail").innerHTML=""
            document.getElementById("email").style.borderColor="rgb(27, 118, 222)"
            return true
        }
    }   
}

function ValidarUsuario(){
    var user=document.getElementById("nUser").value;  
    if(user==""){
        document.getElementById("validaUser").innerHTML="* Campo vacío"
        document.getElementById("nUser").style.borderColor="red"
        return false
    }else{
        let correcto;
        let re = /^[a-zA-Z0-9]{3,100}$/;
        correcto = user.match(re);
        if (!correcto){
            document.getElementById("validaUser").innerHTML="* Formato incorrecto"
            document.getElementById("nUser").style.borderColor="red"  
            return false
        }
        else{
            document.getElementById("validaUser").innerHTML=""
            document.getElementById("nUser").style.borderColor="rgb(27, 118, 222)"
            return true
        }
    }   
}

function validarPsswd(){
    var psswd=document.getElementById("psswd").value;  
    if(psswd==""){
        document.getElementById("validaPsswd").innerHTML="* Campo vacío"
        document.getElementById("psswd").style.borderColor="red"
        return false
    }else{
        let correcto;
        let re = /^[a-zA-Z0-9]{7,100}$/;
        correcto = psswd.match(re);
        if (!correcto){
            document.getElementById("validaPsswd").innerHTML="* Formato incorrecto"
            document.getElementById("psswd").style.borderColor="red"  
            return false
        }
        else{
            document.getElementById("validaPsswd").innerHTML=""
            document.getElementById("psswd").style.borderColor="rgb(27, 118, 222)"
            return true
        }
    } 
}

function validarPsswdR(){
    var psswdR=document.getElementById("psswdR").value;  
    if(psswdR==""){
        document.getElementById("validaPsswdR").innerHTML="* Campo vacío"
        document.getElementById("psswdR").style.borderColor="red"
        return false
    }else{
        let correcto;
        let re = /^[a-zA-Z0-9]{7,100}$/;
        correcto = psswdR.match(re);
        if (!correcto){
            document.getElementById("validaPsswdR").innerHTML="* Formato incorrecto"
            document.getElementById("psswdR").style.borderColor="red"  
            return false
        }
        else{
            document.getElementById("validaPsswdR").innerHTML=""
            document.getElementById("psswdR").style.borderColor="rgb(27, 118, 222)"
            return true
        }
    } 
}

function ValidaContras(){
    const p1 = document.getElementById("psswd").value
    const p2 = document.getElementById("psswdR").value
    if (p1 != p2) {
        document.getElementById("validaPsswdR").innerHTML = "* Las contraseñas no coinciden"
        document.getElementById("psswd").style.borderColor="red"  
        document.getElementById("psswdR").style.borderColor="red"  
        return false
    }
    else if(p1==p2 && p1!="" && p2!=""){
    document.getElementById("validaPsswdR").innerHTML = ""
    document.getElementById("psswd").style.borderColor="rgb(27, 118, 222)"  
    document.getElementById("psswdR").style.borderColor="rgb(27, 118, 222)" 
    return true
    }
}

function ValidarPseg(){
    var ps=document.getElementById("ques").value; 
    if(ps==-1){
        document.getElementById("validaQues").innerHTML="* Seleccione alguna opcion"
        document.getElementById("ques").style.borderColor="red"
        return false
    }else{
        document.getElementById("validaQues").innerHTML=""
        document.getElementById("ques").style.borderColor="rgb(27, 118, 222)"
        return true
    }
}

function ValidarRespuestaS(){
    var rs=document.getElementById("respuestaSeg").value;  
    if(rs==""){
        document.getElementById("validaRespuesta").innerHTML="* Campo vacío"
        document.getElementById("respuestaSeg").style.borderColor="red"
        return false
    }else{
        let correcto;
        let re = /^[a-zA-Z0-9 ]{3,100}$/;
        correcto = rs.match(re);
        if (!correcto){
            document.getElementById("validaRespuesta").innerHTML="* Formato incorrecto"
            document.getElementById("respuestaSeg").style.borderColor="red"  
            return false
        }
        else{
            document.getElementById("validaRespuesta").innerHTML=""
            document.getElementById("respuestaSeg").style.borderColor="rgb(27, 118, 222)"
            return true
        }
    }   
}


//Efectos de mostrado de contraseña
eye1.onclick=(()=>{
    if(muestraC1.type==="password"){
        muestraC1.type="text"
        eye1.classList.add("hide-btn")
    }else{
        muestraC1.type="password"
        eye1.classList.remove("hide-btn")
    }
})

eye2.onclick=(()=>{
    if(muestraC2.type==="password"){
        muestraC2.type="text"
        eye2.classList.add("hide-btn")
    }else{
        muestraC2.type="password"
        eye2.classList.remove("hide-btn")
    }
})

});