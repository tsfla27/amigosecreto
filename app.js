// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];
let lista = document.getElementById("listaAmigos");

function agregarAmigo() {
    
    if (document.getElementById("amigo").value == ""){
        alert("Por favor inserte un nombre")
    } else {
        let nombre =document.getElementById("amigo").value
        amigos.push(nombre);
        document.getElementById("amigo").value = ""
        listaAmigos(); 
    }
    
}

function listaAmigos(){
    
    lista.innerHTML = "";
    for (let i= 1; i <= amigos.length; i++) { 
    let nuevoAmigo = document.createElement("li");     
    nuevoAmigo.innerHTML= amigos[i-1];
    lista.appendChild(nuevoAmigo);
    }

}

function sortearAmigo(){
    console.log(amigos.length)
    if (amigos.length <= 1) {
        alert("Debes ingresar 2 nombres como minimo");
    } else {
        let nombreSorteado = Math.floor(Math.random()*amigos.length);
        lista.innerHTML= ""
        document.getElementById("resultado").innerHTML= `El amigo secreto sorteado es: ${amigos[nombreSorteado]}`;
    }  


}