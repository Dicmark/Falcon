//protegemos nuestros datos con la función autoinvocada
(function(){
    var texto = "Damian"
    var nuevoTexto = texto.substring(2)
    //texto.length este metodo nos permite saber cuantos caracteres ocupa la cadena
    //texto.substring(2) este metodo nos permite cortas desde el inicio un string el numero de caracteres que le indiquemos en el parentesis
    //texto.replace(texto,"Heinze" ) este metodo lo que hace es tomar el valor de la variable texto y la reemplaza por el valor indicado
    //texto.toUpperCase() conviertes el texto a mayusculas
    //texto.toLowerCase() convierte el texto a minusculas
    document.write(nuevoTexto)
}())