(function(){
    //definimos una variable donde almcenamos el formulario
    var formulario = document.getElementsByName("formulario")[0]//como estamos trayendo los elemntos por nombre si hubieran mas de 1 formulario traeria todos por lo tanto se le identifica que queremos el primero con los corchetes
    //accedemos a los elementos del formulario
    var elemento = formulario.elements
    //creamos una variable para traer el boton
    var boton = document.getElementById("btn")

    //definimos la funciona para validar el nombre
    var validarNombre = function(e){
        //colocamos un condicional que valide que haya algo en el campo nombre. Para esto accedemos al elemento del fomulario
        if (formulario.nombre.value/*con esto lo que hacemos es acceder al valor del campo nombre del fomrulario*/ == 0){
            alert("Debes completar tu nombre")
            //para que no se envien los datos si no esta completos se hace de la siguiente forma
            e.preventDefault()//para poder utilizar esto y evitar que el boton submit envie los datos si no estan completos los pasamos como argumento de las funciones
        }
    }

    //validamos los radios de sexo
    var validarSexo = function(e){
        //validamos si el usuario ha seleccionado un checkbox u otro
        if (formulario.sexo[0].checked == true || formulario.sexo[1].checked /*esto lo que hace es acceder al campo con nombre sexo y a su vez evalua el primero de esos que se llaman sexo para eso el [0]*/){
        }else{
            alert("Debes seleccionar una opción de sexo")
            e.preventDefault()//con esto si el usuario no selecciono nada on envia los datos
        }
    }

    //validamos el checbox de terminos
    var validarTerminos = function(e){
        if (formulario.terminos.checked == true){

        }else{
            alert("Debe tildar los terminos y condiciones para continuar")
            e.preventDefault(e)
        }
    }
    
    //podriamos crear una sola función que valide todo el formulario, pero es de buena practica que cada función valide una cosa por vez.
    //creamos la funcion validar
    var validar = function(e){//dentro de esta función vamos llamar a las otras funciones que van a validar todo el formulario
        validarNombre(e)
        validarSexo(e)
        validarTerminos(e)
    }

    //agregamos un evento submit del boton al formulario
    formulario.addEventListener("submit", validar)//agregamos el evento y en con junto con submit agregamos la función validar

}())