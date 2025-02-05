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

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos amigos para el sorteo.");
        return;
    }

   const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado (usando innerHTML)
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `Amigo sorteado: ${amigoSeleccionado}`;
    }

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function seleccionarAmigoAleatorio() {
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para seleccionar.");
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // Genera un número entero aleatorio entre 0 y amigos.length - 1

    // 3. Obtener el nombre sorteado
    const amigoSeleccionado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    const resultadoElemento = document.getElementById("resultado"); // Asegúrate de tener un elemento con el id "resultado" en tu HTML
    resultadoElemento.innerHTML = `El amigo seleccionado al azar es: ${amigoSeleccionado}`; // Muestra el resultado usando innerHTML
}
