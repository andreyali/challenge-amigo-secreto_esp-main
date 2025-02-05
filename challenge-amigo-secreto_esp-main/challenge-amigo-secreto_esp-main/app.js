let amigos = []; // Array para almacenar los nombres de los amigos

function agregarAmigo() {
    const nombreAmigoInput = document.getElementById("amigo");
    const nombreAmigo = nombreAmigoInput.value.trim();

    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);
        nombreAmigoInput.value = "";
        mostrarAmigos(); 
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
    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para seleccionar.");
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    const amigoSeleccionado = amigos[indiceAleatorio];

    // *** LIMPIAR LA LISTA DE RESULTADOS ANTES DE MOSTRAR EL NUEVO RESULTADO ***
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = ""; // Limpiar el contenido anterior

  // *** LIMPIAR EL RESULTADO ANTERIOR Y MOSTRAR EL NUEVO RESULTADO ***
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = `Amigo sorteado: ${amigoSeleccionado}`; // Usar textContent para reemplazar el contenido
}
