(function(){
    //para poder acceder desde el js a los elementos del DOM lo hacemos de la siguiente manera. Supongamos que queremos acceder a los elemtos p del html
    var elementosP = document.getElementsByTagName("p")
    //se puede acceder a los elementos por su id de la siguiente manera
    var segundoParrafo = document.getElementById("segundo")

    //CREANDO NODOS

    //1-Crear el elemento
    var elemento = document.createElement("h2")
    //creamos el elemento con el metodo createElement y le pasamos como argumento el elemento que queremos crear en este caso h2

    //2-Crear un nodo de texto
    var contenido = document.createTextNode("Este es un titular")
    //creamos una variable que contenga el contenido del h2 con el metodo createtextnode

    //3-Añadir el nodo de texto al elemento
    elemento.appendChild(contenido)
    //De esta forma lo que hacemos es llamar a la variable contenido y agregarle la variable conenido con su respectivo valor

    //4-Agregar atributos al elemento
    elemento.setAttribute("align", "center")
    //Esto se utiliza para agregar atributos, va compuesto por 2 valores el metodo, el primero es el nombre del atributo y el segundo es el valor que va a tomar ese atributo.

    //5-Agregar el elemento al documento
    document.getElementById("subtitulo").appendChild(elemento)
    //De esta forma lo que hacemos es que con document, le deicimos que busque le id subtitulo y le agregue la variable elemento, la cual ya contiene el valor y los atributos que hemos pre seteados.

    //MANEJO DE NODOS
    //1-Creamos un nodo
    var elemento2 = document.createElement("li")
    var conenido2 = document.createTextNode("Nuevo texto")
    elemento2.appendChild(conenido2)
    
    //2-Para agregar el nodo dentro de la lista ordenada hacemos de la siguietne manera
    //Definimos una variable padre y capturamos el valor con el metodo get....
    var padre = document.getElementById("lista")
    //En el caso de desconocer el id padre lo que se puede hacer es lo siguiente
    var padre2 = document.getElementsByTagName("li")[0].parentNode
    //Esto lo que hace es buscar cual es el elemto padre de lis tag li y mas especificamente del li que esta en la posición 0 ya que cuando utilizamos este metodo devuelve un arreglo de elementos y por lo tanto se los accesa mediante []
    padre.appendChild(elemento2)//de esta forma se agrega el elemto al final de la lista ordenada

    //3-en el caso de quererlo agregar en el primer lugar se hace de la siguiente manera.
    //definimos una variable nueva
    var primerElemento = document.getElementsByTagName("li")[0]//de esta forma guardamos en la variable el valor del primer elemento del arreglo de los li
    //para insertarlo al comiendo entonces se utiliza
    padre2.insertBefore(elemento2 , primerElemento)//se utiliza el metodo insert... que cuenta de 2 argumentos la variable elemento2 que contiene el contenido y la variable primerElemento que contiene la ubicación

}())