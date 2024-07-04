//Este codigo da las funciones para que pueda ejecutarse//
function escribe(num) { // esto es una funcion para que se invoque en el html //
    var colores = ["ninguno","rojo","amarillo","verde","azul"];
    var texto = document.getElementById("respuesta") //getElementById esto es un unico elemento buscado //
    texto.innerHTML = colores[num]
}