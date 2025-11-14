let puntos = 0;
let lanzamientos = 5;
jugar = function () {
  let resultado;
  resultado = lanzarDado();
  mostrarCara(resultado);
  modificarPuntos(resultado);
  modificarLanzamientos(resultado);
  if (puntos > 20) {
    mostrarTexto("lblResultado", "GANASTE");
  } else {
       mostrarTexto("lblResultado", "PERDISTE");
  }

  if(lanzamientos == 0){
      mostrarTexto("lblResultado2", "GAME OVER");
  }
};

modificarPuntos = function (numero) {
  puntos = puntos + numero;
  cambiarTexto("lblPuntos", puntos);
};
modificarLanzamientos = function () {
  lanzamientos = lanzamientos - 1;
  cambiarTexto("lblLanzamientos", lanzamientos);
};

mostrarCara = function (numero) {
  if (numero == 1) {
    cambiarImagen("imgDado", "dados1.png");
  } else if (numero == 2) {
    cambiarImagen("imgDado", "dados2.png");
  } else if (numero == 3) {
    cambiarImagen("imgDado", "dados3.png");
  } else if (numero == 4) {
    cambiarImagen("imgDado", "dados4.png");
  } else if (numero == 5) {
    cambiarImagen("imgDado", "dados5.png");
  } else if (numero == 6) {
    cambiarImagen("imgDado", "dados6.png");
  }
};

lanzarDado = function () {
  let aleatorio;
  let aleatorioMultiplicado;
  let aleatorioEntero;
  let valorDado;
  aleatorio = Math.random();
  aleatorioMultiplicado = aleatorio * 6;
  aleatorioEntero = parseInt(aleatorioMultiplicado);
  valorDado = aleatorioEntero + 1;
  return valorDado;
};
limpiar=function(){
     punatje=0;
     lanzamientos=5;
}