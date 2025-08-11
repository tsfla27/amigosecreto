// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];
let lista = document.getElementById("listaAmigos");

function agregarAmigo() {
    // si el input esta vacio da una alerta que tiene que ingresar un nombre
    if (document.getElementById("amigo").value == ""){
        alert("Por favor inserte un nombre")
    } else {
        // Ingresa a la lista los nombres
        let nombre =document.getElementById("amigo").value
        amigos.push(nombre);
        document.getElementById("amigo").value = ""
        listaAmigos(); 
    }
    
}

function listaAmigos(){
    //Imprimi los nombres de la lista
    lista.innerHTML = "";
    for (let i= 1; i <= amigos.length; i++) { 
    let nuevoAmigo = document.createElement("li");     
    nuevoAmigo.innerHTML= amigos[i-1];
    lista.appendChild(nuevoAmigo);
    }

}

function sortearAmigo(){
    // debe haber ingresado como minimo 2 nombres
    if (amigos.length <= 1) {
        alert("Debes ingresar 2 nombres como minimo");
    } else {
        //hace el sorteo y lo muestra en pantalla
        let nombreSorteado = Math.floor(Math.random()*amigos.length);
        lista.innerHTML= ""
        document.getElementById("resultado").innerHTML= `El amigo secreto sorteado es: ${amigos[nombreSorteado]}`;
    }  
}