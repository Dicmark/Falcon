(function(){
	// Variables
    //accedermos al elemento lista
	var lista = document.getElementById("lista"),
    //accedemos al input tarea
		tareaInput = document.getElementById("tareaInput"),
    //accedemos al boton de agregar        
		btnNuevaTarea = document.getElementById("btn-agregar");
    

	// Funciones
	var agregarTarea = function(){
		var tarea = tareaInput.value,//De esta forma acceso al valor que se ingresa en el campo Agregar tarea
			nuevaTarea = document.createElement("li"),//Creamos un elemento li ya que es el que tenemos que agregar a la lista de tareas
			enlace = document.createElement("a"),//Como cada tarea esta compuesta de un enlace entonces crear un elemento tipo a
			contenido = document.createTextNode(tarea);//Creamos un nodo de texto que esta almacenado en la variable contenido, la cual contiene el valor de la variable tarea que es lo que ingresamos en el input para cargar una neuva tarea

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");//Con esto lo que hacemos es que si la variable tarea esta vacia, modificampos el placeholder por el nuevo mensaje
			tareaInput.className = "error";//Con esto agregamos la clase del input por la clase error 
			return false;//De esta forma nos salimos por completo de la funcion agregaTarea
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";//Con esta linea lo que logramos es que luego de agregar una tarea el campo donde se agregan las tareas se limpie automaticamente

		//Con este for agregamos la opción de remover de lista una tarea para cada una de las tareas que se crean
		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);//El this identifica cual de los elementos de la lista fue seleccionado y lo elimina
			});
		}

	};

	//Esta funcion lo que hace eliminar la clase error del input y devolverle el valor original al place holder
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	//Esta función lo que hace es eliminar la tarea de la lista que fue clickeada
	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// Eventos

	// Agregamos el evento para agregar tarea. Esto lo que hace es cuando se hace clic en el boton se agrega la tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Agregamos el evento para comprobar input. Esto llama a la funcion comprobar input que chequea que el campo en el input no este vacio
	tareaInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista. Esto lo que hace es recorrer los elementos que estan dentro de la lista y les agrega a cada uno de ellos el evento de borrado.
	for (var i = 0; i <= lista.children.length/*accede a el tamaño de la lista es decir, toma el tamaño de los elementos hijos de la lista, que en este caso serian cada una de las tareas*/  -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());