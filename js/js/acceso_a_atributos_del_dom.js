(function(){
    //Creamos un elemento
    var elemento = document.createElement("div")
    //Para cambiarle los atributos a este elemento creado
    elemento.setAttribute("class" , "azul")
    document.body.appendChild(elemento)//con esto mostramos el elemento en el html
    //para agregar este elemento al section del html hacemos...
    var padre = document.getElementById("contenedor")//accedemos de esta forma al elemento padre
    //ahora agregamos el nuevo elemento al section
    var ubicacion = document.getElementsByTagName("div")[0]//accedemos a todos los divs y especificamos con el [0] que queremos el primero del arreglo
    //agregamos antes del primer elemento o sea primero
    padre.insertBefore(elemento , ubicacion)

    //para agregar el otro cuadro con la clase rojo
    //creamo un elemento
    var rojo = document.createElement("div")
    rojo.setAttribute("class" , "rojo")
    document.body.appendChild(rojo)
    //para agregarlo al section hahcemos
    var nuevaUbicacion = document.getElementsByTagName("div")[2]
    //padre.insertBefore(rojo , nuevaUbicacion) //si los queremos antes del ultimo
    padre.appendChild(rojo)//si lo queremos al final

}())