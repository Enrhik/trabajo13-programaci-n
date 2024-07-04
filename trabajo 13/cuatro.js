function numeros() { // esto es una funcion para que se invoque en el html //
    var i = 1; // variables que les dan //
    var par = 0;
    var impar = -1;
    do { // do ejecuta repetidamente una sentencia hasta que la expresion de prueba se evalua en falsa //
        par += 2; // que se sume mas dos //
        impar += 2; // que se sume mas dos //
        if (i <= 10) { // que no sea menor o igual a 10
            document.getElementById("par").innerHTML += par + "<br>"; //getElementById esto es un unico elemento buscado //
            document.getElementById("impar").innerHTML += impar + "<br>"; //getElementById esto es un unico elemento buscado //
        }
        document.getElementById("enteros").innerHTML += i + "<br>"; //getElementById esto es un unico elemento buscado //
        i++; // incrementacion
    } while (i <= 20); // while es repetir un codigo mientras dure una determina condicion //
}