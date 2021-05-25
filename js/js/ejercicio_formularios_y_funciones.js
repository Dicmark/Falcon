//creamos la funcion suma
var suma = function suma( numero1 , numero2){
    //definimos los parametros con los que va a trabajar la funcion
    //guardamos en una variable los valores ingresados en el formulario del archivo html
    var num1 = parseFloat(document.getElementById("n1").value)
    //donde num1 es el id del formuladio lo que le estamos diciendo es que extraiga del documento html, extraiga el elemto que tiene el id "num1" y de ese elemento queremos su valor
    var num2 = parseFloat(document.getElementById("n2").value)
    //Lo que nos permite la funcion parseInt es transformar todo el contenido que es una cadena de texto a un entero. Lo mejor es usar parseFloat para que utilice los numeros enteros y decimales
    var resultado = num1 + num2
    return (resultado)
}




