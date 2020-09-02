let ubicacionPrincipal = window.pageYOffset;


  AOS.init();


window.addEventListener('scroll', () => {
  let desplazamientoActual = window.pageYOffset;
  if(ubicacionPrincipal>=desplazamientoActual){
    document.getElementsByTagName("nav")[0].style.top="0px";
  }else{
    document.getElementsByTagName("nav")[0].style.top ="-100px";
  }
  ubicacionPrincipal = desplazamientoActual;
})

/*let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo=true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", () => {
  enlacesHeader.classList.toogle("menuDos");
})*/



