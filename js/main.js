// Lista de animales con pistas
let animales = [
    { nombre: "gato", pista: "Soy un animal doméstico que maúlla." },
    { nombre: "oso panda", pista: "Soy un oso blanco y negro conocido por comer bambú." },
    { nombre: "zorro", pista: "Soy un animal astuto con una cola larga y espesa." },
    { nombre: "caballo", pista: "Soy un animal grande usado para montar y trabajar en el campo." },
    { nombre: "pato", pista: "Soy un ave acuática con un pico aplanado." },
    { nombre: "cocodrilo", pista: "Soy un reptil grande con una piel escamosa y una boca poderosa." },
    { nombre: "lobo", pista: "Soy un carnívoro salvaje y ancestro de los perros domésticos." },
];

// Variable para el puntaje del jugador
let puntaje = 0;

// Función para seleccionar un animal aleatorio
function seleccionarAnimal() {
    return animales[Math.floor(Math.random() * animales.length)];
}

// Función para jugar una ronda
function jugarRonda(animal) {
    // Mostrar la pista al jugador
    alert('Pista - ' + animal.pista);

    // Pedir al jugador si desea continuar o cancelar la ronda
    const continuar = confirm("¿Deseas continuar con esta ronda? Presiona OK para continuar o Cancelar para terminar el juego.");

    // Verificar si el jugador desea continuar o cancelar
    if (!continuar) {
        alert('Has cancelado el juego. ¡Hasta la próxima!');
        return true; // Indicar que el juego ha finalizado
    }

    // Pedir al jugador adivinar el nombre del animal
    const respuesta = prompt("¿Cuál es el nombre del animal?");

    // Convertir la respuesta del jugador y el nombre del animal a mayúsculas (para evitar dolores de cabeza)
    const respuestaMayusculas = respuesta.toUpperCase();
    const nombreAnimalMayusculas = animal.nombre.toUpperCase();

    // Verificar si la respuesta es correcta
    if (respuestaMayusculas === nombreAnimalMayusculas) {
        alert('¡Correcto! Has ganado un punto.');
        puntaje++;
    } else {
        alert('Incorrecto. El animal era: ' + animal.nombre);
    }

    // Mostrar el puntaje actual al jugador
    alert('Tu puntaje actual es: ' + puntaje);

    return false; // Indicar que el juego aún continúa
}

// Función para iniciar el juego
function iniciarJuego(totalRondas, condicionGanar) {
    // Mensaje inicial con las reglas del juego
    const mensajeInicial = "¡Bienvenido al juego de adivinar animales!\n" +
        "Aquí tienes que adivinar el nombre del animal basándote en la pista que se te da.\n" +
        "Ganas un punto por cada respuesta correcta y el juego termina cuando alcanzas 3 puntos.\n" +
        "¡Buena suerte!";
    alert(mensajeInicial);

    // Preguntar al jugador si quiere jugar
    const jugar = confirm("¿Quieres jugar al juego de adivinar animales?");
    if (!jugar) {
        alert("¡Hasta luego!");
        return;
    }

    // Jugar las rondas
    for (let ronda = 1; ronda <= totalRondas; ronda++) {
        const animal = seleccionarAnimal();
        const juegoFinalizado = jugarRonda(animal);
        if (juegoFinalizado) {
            return; // Salir del bucle si el juego ha finalizado
        }
        if (condicionGanar(puntaje)) {
            alert('¡Has ganado el juego con ' + puntaje + ' puntos!');
            alert('Gracias por jugar. ¡Hasta la próxima!');
            return;
        }
    }

    // Preguntar al jugador si quiere agregar un nuevo animal
    const agregarNuevo = confirm("¿Quieres agregar un nuevo animal a la lista?");
    if (agregarNuevo) {
        agregarAnimalYPista();
    } else {
        alert('Fin del juego');
    }
}

// Función para agregar un nuevo animal y pista
function agregarAnimalYPista() {
    let nombreNuevo;
    let pistaNueva;
    do {
        nombreNuevo = prompt("Ingrese el nombre del nuevo animal:");
    } while (!nombreNuevo.trim()); // Repetir hasta que se proporcione un nombre no vacío

    do {
        pistaNueva = prompt("Ingrese la pista para el nuevo animal:");
    } while (!pistaNueva.trim()); // Repetir hasta que se proporcione una pista no vacía

    const nuevoAnimal = { nombre: nombreNuevo, pista: pistaNueva };
    animales.push(nuevoAnimal);
    alert("Nuevo animal agregado con éxito!");
}

// Función para buscar un animal por nombre
function buscarAnimal(nombre) {
    // Verificar si se proporcionó un nombre
    while (!nombre) {
        nombre = prompt("Debe ingresar un nombre de animal. Por favor, inténtelo de nuevo:");
    }

    const animalEncontrado = animales.find(animal => animal.nombre === nombre);
    if (animalEncontrado) {
        alert('Animal encontrado: ' + animalEncontrado.nombre + ' - ' + animalEncontrado.pista);
    } else {
        const agregarNuevo = confirm("El animal no se encuentra en la lista. ¿Quieres agregarlo?");
        if (agregarNuevo) {
            agregarAnimalYPista();
        } else {
            alert('Animal no encontrado.');
        }
    }
}

// Iniciar el juego
iniciarJuego(5, (puntaje) => puntaje >= 3);

// Búsqueda de un animal por nombre
const nombreBusqueda = prompt("Ingrese el nombre del animal que desea buscar:");
buscarAnimal(nombreBusqueda);