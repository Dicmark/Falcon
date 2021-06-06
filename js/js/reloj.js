(function(){
    //Esta funcion se va a encargar de actualizar la hora cada segundo
    var actualizarHora = function(){
        //Tomamos los datos de la fecha 
        var fecha = new Date()
        //Almacenamos los datos que necesitamos en variables
        var diaNombre = fecha.getDate()
        var diaNumero = fecha.getDay()
        var mes = fecha.getMonth()
        var year = fecha.getFullYear()
        var hora = fecha.getHours()
        var minutos = fecha.getMinutes()
        var seg = fecha.getSeconds()
        var ampm
        //Para mostrar los datos por pantalla debemos acceder a cada uno de los elementos p
        var pHoras/*Donde la p es por parrafo horas*/ = document.getElementById("horas")
        //De esta forma vamos accediendo a todos los elementos que necesitamos
        var pAmpm = document.getElementById("ampm")
        var pMinutos = document.getElementById("minutos")
        var pSeg = document.getElementById("segundos")
        var pDiaSemana = document.getElementById("diaSemana")
        var pDia = document.getElementById("dia")
        var pMes = document.getElementById("mes")
        var pYear = document.getElementById("year")

        //Para mostrar le dia de la semana
        var semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
        pDiaSemana.textContent = semana[diaNumero]//diaNumero nos tre el numero de la semana el cual se va a intercambiar por el numero que corresponda en el arreglo

        //Para mostrar el numero del dia
        pDia.textContent = diaNombre

        //Para mostrar el mes
        var mesNombre = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        pMes.textContent = mesNombre[mes]

        //Para transformar el reloj en un reloj de 12 horas
        if (hora >= 12) {
            hora = hora - 12
            ampm = "PM"
        }else {
            ampm = "AM"
        }

        //De esta forma cuando hora sea 0 va a mostrar 12
        if (hora == 0) {
            hora = 12
        }

        //Para mostrar el año
        pYear.textContent = year

        //Para mostrar la hora
        pHoras.textContent = hora

        //Para que siempre trabaje con 2 digitos los minutos
        if (minutos < 10) {
            minutos = "0" + minutos //Concatenamos el 0 delante de el valor de la variable minutos
        }

        //Para que siempre trabaje con 2 digitos los segundos
        if (seg < 10) {
            seg = "0" + seg //Concatenamos el 0 delante de el valor de la variable minutos
        }

        //Para los minutos
        pMinutos.textContent = minutos

        //Para am pm
        pAmpm.textContent = ampm

        //Para los segundos
        pSeg.textContent = seg
    }
    
    actualizarHora()
    //Para que la funcion se ejecute cada segundo hacemos
    var intervalo = setInterval(actualizarHora, 1000)//Con esto ejecuta la funcion actualizar hora cada 1 segundo
}())