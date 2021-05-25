//Definimos el arreglo entre []
var amigos = ["Damian", "Dario", "Lucas", true, 0.1234, 18]
//Para acceder a los arreglos
document.write(amigos[3] + "<br>")

//Para saber el tamaño del arreglo se usa length
document.write(" Tienes un arreglo de " + amigos.length + " elementos"+ "<br>")

//Para agregar un nuevo elemento
amigos[amigos.length] = "Santiago"//Lo que hace es posicionarse al final del arreglo y agregar e
document.write(" Tienes un arreglo de " + amigos.length + " elementos" + "<br>")

//Otra forma de agregar elementos al arreglo es con push
amigos.push("Ivan","Matias","Fran")
document.write(amigos + "<br>")

//Para eliminar elementos de el arreglo se utiliza pop
amigos.pop()//Elimina el utlimo elemento de el arreglo
document.write(amigos + "<br>")

//Definimo otro arreglo
var amigos2 = ["Eugenia", "Mariano", "Gustavo"]

//Si queremos unir los 2 arreglos utilizamos el metodo concat
var amigos3 = amigos.concat(amigos2)
document.write(amigos3 + "<br>")

//El metodo join se utiliza para poder determinar como separar por pantalla para el usuario el arreglo, ya que internamente no sufre ningun cambio
document.write(amigos3.join(":") + "<br>")

//Con el metodo sort lo que hace es ordenar los elemento alfabeticamente
var ordenados = amigos3.sort
document.write(amigos3 + "<br>")