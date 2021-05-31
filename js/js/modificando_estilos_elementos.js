(function(){
    //Para agregar las clases por js
    var encabezado = document.getElementById("encabezado")//guardamos el encabezado
    encabezado.className = "titulo tituloGrande"//de esta forma agregamos las clases
    //si queremos modificar directamente el stilo hacemos
    //encabezado.style.color = "red"
    //encabezado.style.background = "green"//esto es como colocar el style directamente sobre el html
    //si queremos eleminar una clase se puede hacer de 2 formas
    //una
    encabezado.className = "titulo"
    //en el caso de que sepamos el nombre de la clase que queremos eliminar pero no sabemos el nombre de la otra clase podemos hacer
    encabezado.className = encabezado.className("tituloGrande" , "")//reemplzamos la clase tituloGrande por un espacio en blanco
}())