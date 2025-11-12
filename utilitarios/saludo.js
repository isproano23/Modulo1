saludar=function(){
    let  nombre;
    nombre=recuperarTexto("txtnombre");
    let apellido
    apellido=recuperarTexto("txtapellido")
}

recuperarTexto=function(idcomponente){
 let componente
 let valorIngresado
 componente=document.getElementById(idcomponente);
 valorIngresado=componente.value;

 return valorIngresado;
}


