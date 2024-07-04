
function cifra() { // esto es una funcion para que se invoque en el html //
    num = prompt("escribe un número"); // 
    num = Number(num);
    // esta funcion if (si) else (no) //
    if (num >= 10) {
        alert("Tu número tiene más de una cifra"); // alertas //
    }
    else {
        alert("tu número solo tiene una cifra"); // alertas //
    }
}
