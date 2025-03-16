// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
//Aquí deberás desarrollar la lógica para resolver el problema.

//función agregar nombres:

// Lista donde se almacenarán los nombres de los amigos
let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
}

// Función para actualizar y mostrar la lista de amigos en la página
function actualizarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.style.listStyleType = "disc";
        listaElement.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    mostrarResultado(amigoSeleccionado);
}

// Función para mostrar el resultado del sorteo en la página
function mostrarResultado(amigo) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";
    
    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigo} 🎊`;
    li.style.listStyleType = "disc";
    resultadoElement.appendChild(li);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    listaAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("amigo").value = "";
}

