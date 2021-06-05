(function(){

    //Primeo de obtiener la fecha desde la pc
    var fecha = new Date()//de esta forma se obtiene la fecha actual del sistema
    document.write(fecha)
    //Para extraer la información de la fecha 

    //Hora
    var horas = fecha.getHours()//Este metodo extrae las horas 
    //en el caso que queramos el reloj solo de 12 hs hacemos fecha.getHours() - 12
    document.write(horas)

    //Minutos
    var minutos = fecha.getMinutes()

    //Segundos
    var seg = fecha.getSeconds()

    //Para el dia lunes martes
    var dia = fecha.getDay()

    //Para el numero del dias del mes es decis 1 4 6 7
    var dianum = fecha.getDate()

    //Para el mes
    var mes = fecha.getMonth()

    //Para obtener el año
    var year = fecha.getFullYear()
}())