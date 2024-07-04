function numero() { // esto es una funcion para que se invoque en el html //
    num = prompt("Escribe un número del 10 al 20"); // para introducir un numero 
    num = Number(num);
    // esta funcion if (si) else (no) //
    if (num <= 10 || num >= 20) { // dentro de if esta dice que no sea menor o igual a 10 e el otro que no sea mayor o igual a 20
        alert("Este número no es valido"); // alertas //
    }
    else {
        alert("El número es correcto"); // alertas //
    }
}