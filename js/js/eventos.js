(function(){
    //vamos a darle un evento al boton
    var boton = document.getElementById("boton")//accedemos al boton
    //para agregarle un evento
    //creamos una funcion
    var saludo = function (){
        alert("Saludo")
    }
    boton.addEventListener("click" , saludo)//esta compuesto de 2 parametros el primero es el tipo de evento que queremos pasar. El segundo parametro es lo que queremos que haga
}())