
    var zoom = function(){
        //accedemos al elemento
        var imagen = document.getElementById("thumb")
        //insertamos un condicional para que cuando se apriete el boton se agrande la imagen y cuando se vuelva a presionar se achique
        if (imagen.className == "thumb"){
            imagen.className = "thumb grande"//le agregamos la clase grande al elemento para que se agrande la imagen
        }else {
            imagen.className = "thumb"//si ya tiene la clase grande agregada entonces se la sacamos para que se achique
        }
    }

    



