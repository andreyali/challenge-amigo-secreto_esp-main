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
    // 1. Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");

    // 2. Limpiar la lista existente (usando innerHTML)
    listaAmigos.innerHTML = "";

    // 3. Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];

        // 4. Crear un nuevo elemento de lista (<li>)
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;

        // 5. Agregar el elemento <li> a la lista <ul>
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
