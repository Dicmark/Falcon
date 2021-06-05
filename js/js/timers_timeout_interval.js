(function(){

    //Timeout 
    //Ejecuta una instrucción luego de un tiempo especificado
    var saludo = function (){
        alert("hola")
    }
    setTimeout(saludo, 1000)//Esta fución recibe 2 parametros, el nombnre de la fución a ejecutar y el tiempo que debe esperar para ejecutarse


    //Interval
    //Ejecuta una instrucción de fomra repetitiva 
    var chau = function (){
        alert("chau")
    }
    setInterval(chau, 3000)//Esta funcion recibe 2 atributos, el nombre de la funciona a ejecutar y cada cuandos milisegundos queremos que se ejecute

    //Para elimiar un intervalo se utiliza la siguiente linea
    //clearInterval(variable donde esta guardado el set interal)
    //var intervalo = setInterval(saludo, 5000)
    //clearInterval(intervalo)
}())