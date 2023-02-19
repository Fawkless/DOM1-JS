// funcion para el hover del borde
function hoverBorder (elemento, color1, color2){
elemento.style.borderColor = color2;
elemento.addEventListener('mouseover', function handleMouseOver() {
       elemento.style.borderColor = color1;
       });
elemento.addEventListener('mouseout', function handleMouseOut() {
       elemento.style.borderColor = color2;
       });}

//funcion para hover del background
function hoverBackground (elemento, color1, color2) {
   elemento.style.background = color2;
   elemento.addEventListener('mouseover', function handleMouseOver() {
          elemento.style.background = color1;
          });
       elemento.addEventListener('mouseout', function handleMouseOut() {
          elemento.style.background = color2;
          });
}
//funcion para el color
function hoverColor (elemento, color2, color1) {
   elemento.style.color = color2;
   elemento.addEventListener('mouseover', function handleMouseOver() {
          elemento.style.color = color1;
          });
       elemento.addEventListener('mouseout', function handleMouseOut() {
          elemento.style.color = color2;
          });
}
//funcion para el hover del logo
function hoverColorLogo (elemento1, elemento2, color1, color2) {
   elemento1.addEventListener('mouseover', function handleMouseOver() {
      elemento1.style.color = color2
      elemento2.style.color = color1
          });
       elemento1.addEventListener('mouseout', function handleMouseOut() {
         elemento1.style.color = color1
         elemento2.style.color = color2
          });         
}

//cambio los hover de la botonera de la 3era pagina
function botonera(color){
   botonGit=document.getElementById("botGit"),
   botonNet=document.getElementById("botNet")
   botonFlecha=document.getElementById("botFlecha")
   botonGit2=document.getElementById("botGit2"),
   botonNet2=document.getElementById("botNet2")
   botonFlecha2=document.getElementById("botFlecha2")
   detalles=document.getElementById("detalles")
   detalles2=document.getElementById("detalles2")
   
   hoverBackground(botonGit,"white", color)
   hoverBackground(botonGit2,"white", color)
   hoverBackground(botonNet,"white", color)
   hoverBackground(botonNet2,"white", color)
   hoverBackground(botonFlecha,"white", color)
   hoverBackground(botonFlecha2,"white", color)
   hoverBackground(detalles,"white", color)
   hoverBackground(detalles2,"white", color)   
}
//funcion para el cambio de tema
function tema(color){

//seleccion por id
apellido = document.getElementById("apellido")
botonCv = document.getElementById("botonVerMas")
borderColor= document.getElementById("borderColor")
logo2=document.getElementById("logo2")
logo1=document.getElementById("logo1")
menu = document.getElementsByClassName("menu1")
sobremi=document.getElementById("sobremi")
miportfolio=document.getElementById("miportfolio")
notificar=document.getElementById("notificar")
htmlYCss=document.getElementById("htmlYCss")
contactame=document.getElementById("contactame")
enviameUnMensaje=document.getElementById("enviameUnMensaje")
enviar=document.getElementById("enviar")
nombre=document.getElementById("nombre")
mail=document.getElementById("mail")
dejaMensaje=document.getElementById("dejaMensaje")

//cambio de color del fondo
apellido.style.color = color;
sobremi.style.background= color;
apellido.style.color = color;
miportfolio.style.color=color;
notificar.style.color=color;
htmlYCss.style.color=color;
contactame.style.color=color;
enviameUnMensaje.style.color=color;
nombre.style.borderColor= color;
mail.style.borderColor=color;
dejaMensaje.style.borderColor=color;


//cambio de color del efecto hover
hoverBackground(botonCv, "white", color)
hoverBorder (borderColor, "white", color)
logo2.style.color = color;
hoverColorLogo (logo1, logo2, "white", color)
hoverColorLogo (logo2, logo1, color, "white")
for (const elemento of menu) {
hoverColor(elemento, "white", color)
}
botonera(color)
hoverBackground(enviar,"white",color)

}

cian= "rgb(0, 255, 242)"
function tema1 () {
   tema (cian)
}
verde= "rgb(65, 161, 0)"
function tema2 () {
   tema (verde)
}
naranja= "rgb(255, 123, 0)"
function tema3 () {
   tema (naranja)
}

function acordeon(){
   mostrar=document.querySelector(".acordeonOculto")
   cambiar=document.querySelector("#botonVerMas")
   mostrar.classList.toggle("acordeonVisible")
   if( cambiar.textContent == "Ver mas") {
      cambiar.textContent = "Ver menos"
   } else {
      cambiar.textContent= "Ver mas"
   }

}

function acordeon2(){
   mostrar2=document.querySelector(".acordeonOculto2")
   cambiar2=document.querySelector(".boton2")
   mostrar2.classList.toggle("acordeonVisible2")
   if( cambiar2.textContent == "Leer mas") {
      cambiar2.textContent = "Leer menos"
   } else {
      cambiar2.textContent= "Leer mas"
   }

}




