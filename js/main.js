// Lista de animales con pistas
const animales = [
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

// Función para iniciar una ronda
function iniciarRonda() {
    // Número total de rondas
    const totalRondas = 5;

    // Bucle para jugar las rondas
    for (let ronda = 1; ronda <= totalRondas; ronda++) {
        // Seleccionar un animal de la lista
        const animalAleatorio = animales[Math.floor(Math.random() * animales.length)];
        
        // Mostrar la pista al jugador
        alert('Ronda ' + ronda + ': Pista - ' + animalAleatorio.pista);
        
        // Pedir al jugador adivinar el nombre del animal
        const respuesta = prompt("¿Cuál es el nombre del animal?");
        
        // Convertir la respuesta del jugador y el nombre del animal a mayúsculas (para evitar dolores de cabeza)
        const respuestaMayusculas = respuesta.toUpperCase();
        const nombreAnimalMayusculas = animalAleatorio.nombre.toUpperCase();
        
        // Verificar si la respuesta es correcta
        if (respuestaMayusculas === nombreAnimalMayusculas) {
            alert('¡Correcto! Has ganado un punto.');
            puntaje++;
        } else {
            alert('Incorrecto. El animal era: ' + animalAleatorio.nombre);
        }
        
        // Mostrar el puntaje actual al jugador
        alert('Tu puntaje actual es: ' + puntaje);
        
        // Ver si el jugador ha alcanzado 3 puntos para ganar el juego
        if (puntaje >= 3) {
            alert('¡Has ganado el juego con 3 puntos!');
            alert('Gracias por jugar. ¡Hasta la próxima!');
            return; // Finaliza el juego si el jugador gana
        }
    }

    // Si el jugador no gana después de todas las rondas
    alert('Fin del juego');
}

// Iniciar el juego
iniciarRonda();