//Global, son variables que pueden ser accesibles desde cualquier parte del codigo
//Local, son variables creadas dentro de la función y por lo tanto solo pueden ser accesibles dentro de ella o desde una función anidada.

var variableGlobal = "Soy global"
alert(variableGlobal)

//Puedo acceder a una variable global desde una funcion
var miFuncion = function miFuncion(){
    alert(variableGlobal)
    //Se le puede modificar el valor de la global
    variableGlobal = "Soy la global modificada dentro de la función"
    alert(variableGlobal)
}
miFuncion()

//En el caso de la variables locales
var miFuncionLocal = function(){
    var variableLocal = "Soy local"
    alert(variableLocal)
    //Si quisieramos acceder desde esta función al valor de la variableLocal de la subFuncion es decir un nivel inferior, no se puede ya que no se puede acceder desde afuera de una función a una variable local. En cambio desde dentro de una función si podemos buscar una variable en los niveles superiores.
    //Podemos anidar funciones
    var subFuncion = function(){
        var variableLocal = "Soy la local de la subfuncion"
        alert(variableLocal)
        //En este caso lo que hace el codigo es buscar la variableLocal que la que primero encuentra es la de la sub función. En el caso de que esa variable no existiera se va a el nivel inmediato superior a buscarla es decie la busca dentro de la funcion miFuncionLocal en ese caso si la encuentra imprimiria "Soy Local". En el caso de que tampoco la encuentre la busca en todo el codigo.
    }
}
miFuncionLocal()
alert(variableLocal)//Este llamado provoca un error debido a que estoy intentando acceder a una variable local desde fuera de la función que la contiene.

//Para proteger los scripts de ataques externos se hacer de la siguiente manera. Se define una funcion que se autoinvoca y dentro de la misma se coloca todo nuestro codigo js.
(function(){
    //aqui dentro va todo nuestro codigo el cual no va a poder ser accedido de forma externa
}())//De esta forma se auto invoca la función
