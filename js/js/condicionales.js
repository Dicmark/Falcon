/*If
if (condicion){
    //instrucciones
}
else{
    //instrucciones
}*/
var nombre = "Damian",
    edad = prompt("Ingresa tu edad: ") //De esta forma al colocar la com nos da lugar de poder continuar definiendo variables

if (nombre == "Damian"){
    document.write("Bienvenido " + nombre)
}else{
    document.write("Bienvenido Anomimo")
}

if (edad == 0){
    document.write("Valor incorrecto")
}else if (edad < 18){
    document.write("Eres menos de edad")
}else{
    document.write("Bienvenido puedes ingresar")
}
    