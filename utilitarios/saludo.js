saludar = function () {
  let nombre;
  nombre = recuperarTexto("txtnombre");
  let apellido;
  apellido = recuperarTexto("txtapellido");
  let edad;
  edad = recuperarInt("txtedad");
  let estatura
  estatura=recuperarFloat("txtestatura")
};

recuperarTexto = function (idcomponente) {
  let componente;
  let valorIngresado;
  componente = document.getElementById(idcomponente);
  valorIngresado = componente.value;

  return valorIngresado;
};

recuperarInt = function (idcomponente) {
  let valorCaja;
  let valorEntero;
  valorCaja = recuperarTexto(idcomponente);
  valorEntero = parseInt(valorCaja);
  return valorEntero;
};
recuperarFloat = function (idcomponente) {
  let valorCaja;
  let valorFloat;
  valorCaja = recuperarTexto(idcomponente);
  valorFloat = parseFloat(valorCaja);
  return valorFloat;
};
