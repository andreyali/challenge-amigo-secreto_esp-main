let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    const nombreAmigoInput = document.getElementById("amigo");
    const nombreAmigo = nombreAmigoInput.value.trim();

    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);
        nombreAmigoInput.value = "";
        mostrarAmigos(); // Actualizar la lista después de agregar un amigo
    } else {
        alert("Por favor, ingrese un nombre.");
    }
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function seleccionarAmigoAleatorio() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para seleccionar.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = `Amigo sorteado: ${amigoSeleccionado}`;
}
