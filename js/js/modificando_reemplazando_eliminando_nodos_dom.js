(function(){
    //Para acceder a un elemento y modificar su contenido
    //1-Accedemos al primer elemento o al que queramos
    var primerElemento = document.getElementsByTagName("li")[0]
    //2-para acceder al contenido se puede hacer de 2 formas
    //primera
    primerElemento.innerHTML = "Nuevo texto <strong> Hola </strong>" //inner tiene la caracteristica que ejecuta codigo html como se puede ver en el ejemplo 
    //segunda
    primerElemento.textContent = "Nuevo texto" //esta forma tiene la caracteristica que no interpreta codigo html como si lo hace el inner

    //Para reemplazar un elemento
    //1-Creamos un nodo
    var elemento = document.createElement("li")
    var contenido  = document.createTextNode("Soy otro nuevo texto")
    elemento.appendChild(contenido)
    //creamos una variable para acceder al alemento padre
    var padre =  document.getElementsByTagName("li")[0].parentNode//con esto accedemos a la lista ok
    //para reemplezar definimos una variable la cual va a contener la ubicación del elemento a reemplazar
    var referencia = document.getElementsByTagName("li")[0]
    //usamos el metodo replace para reemplazar y le pasamos el elemento que nuevo y la ubicación del elemento que queremos reemnplazar
    padre.replaceChild(elemento , referencia)

    //Para eliminar un nodo
    //definimos una variable
    var tio = document.getElementsByTagName("li")[1].parentNode
    var ubicacion = document.getElementsByTagName("li")[1]
    tio.removeChild(ubicacion)
}())