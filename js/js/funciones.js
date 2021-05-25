//Funciones
/*function nombre(){
    //instrucciones
}*/

nombre = prompt("Ingresa tu nombre: ")//pido el nombre
//defino la función y utilizo la variable
function saludo(nombre){
    document.write("Buenos dias " + nombre + "<br>")
}
saludo(nombre)//llamamos la funcion para que se ejecute

//Ejemplo de calculadora
function suma(numero1,numero2 /*separo los parametro que le voy a enviar con ,*/){
    var num1 = numero1
    var num2 = numero2
    return /*Se utiliza en las funciones para que retornen un valor*/ (num1 + num2)
}
//suma(20,30)
//para imprimir por pantalla el resultado de la funcion suma
document.write( suma(50,50) + "<br>" )

//las funciones se puede asignar a una variable
var adicion = function suma(numero1,numero2 /*separo los parametro que le voy a enviar con ,*/){
    var num1 = numero1
    var num2 = numero2
    return /*Se utiliza en las funciones para que retornen un valor*/ (num1 + num2)
}
document.write(adicion(20,100) + "<br>")

//Funcion con condicional
function numeroMax(valor1 , valor2){
    if (valor1 > valor2){
        return valor1
    }else{
        return valor2
    }
}
document.write(numeroMax(20,5) + "<br>")
document.write(numeroMax(5,50) + "<br>")