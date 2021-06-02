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
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

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