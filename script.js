// MÚSICA DE FONDO Y VIDEO

const musica = document.getElementById("musica-fondo");
const video = document.getElementById("video-cumple");

// PANTALLA DE BIENVENIDA

const pantallaBienvenida = document.getElementById("pantalla-bienvenida");
const botonIniciar = document.getElementById("boton-iniciar");

let musicaHabilitada = false;

botonIniciar.addEventListener("click", function() {

    // Habilitar la música
    musicaHabilitada = true;

    // Iniciar reproducción
    musica.play().catch(error => {
        console.log("No se pudo reproducir la música:", error);
    });

    // Desvanecer la pantalla
    pantallaBienvenida.classList.add("oculta");
});
// Pausar música cuando comienza el video
video.addEventListener("play", () => {
    musica.pause();
});

// Reanudar música cuando se pausa o termina el video
video.addEventListener("pause", () => {
    if (musicaHabilitada && !video.ended) {
        musica.play();
    }
});

video.addEventListener("ended", () => {
    if (musicaHabilitada) {
        musica.play();
    }
});
// LISTA DE FOTOGRAFÍAS

const fotos = [
    "imagenes/foto1.jpg",
    "imagenes/foto2.jpg",
    "imagenes/foto3.jpg",
    "imagenes/foto4.jpg",
    "imagenes/foto5.jpg",
    "imagenes/foto6.jpg"
];

// ELEMENTOS DEL HTML

const imagen = document.querySelector(".foto img");
const botonAnterior = document.querySelector("#anterior");
const botonSiguiente = document.querySelector("#siguiente");

// POSICIÓN ACTUAL

let indice = 0;

// MOSTRAR FOTOGRAFÍA

function mostrarFoto() {
    imagen.src = fotos[indice];
}

// SIGUIENTE FOTOGRAFÍA

botonSiguiente.addEventListener("click", function() {
    indice++;

    if (indice >= fotos.length) {
        indice = 0;
    }

    mostrarFoto();
});

// FOTOGRAFÍA ANTERIOR

botonAnterior.addEventListener("click", function() {
    indice--;

    if (indice < 0) {
        indice = fotos.length - 1;
    }

    mostrarFoto();
});

// MOSTRAR LA PRIMERA FOTO

mostrarFoto();


