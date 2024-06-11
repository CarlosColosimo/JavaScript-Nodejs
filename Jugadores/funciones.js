class CJugador {
    constructor(nombre, POS, edad, est, p, NAC) {
        this.nombre = nombre;this.posicion = POS;this.edad = edad;this.estatura = est;this.peso = p;this.nacionalidad = NAC;
    }
}
const jugadores = [
    new CJugador("Fabio1", "G", 43, 1.88, 86, "Brasil"),
    new CJugador("Marlon4", "D", 28, 1.83, 78, "Brasil"),
    new CJugador("Marcelo12", "D", 35, 1.73, 72, "Brasil"),
    new CJugador("Nino33", "D", 26, 1.88, 82, "Brasil"),
    new CJugador("John Kennedy9", "A", 21, 1.73, 71, "Brasil"),
    new CJugador("Keno11", "A", 34, 1.78, 72, "Brasil"),
    new CJugador("Germán Cano14", "A", 35, 1.78, 81, "Argentina")];

// Consulta a. Listar todos los jugadores que sean de nacionalidad argentina
console.log("Jugadores de Nacionalidad argentina:");
const arg = jugadores.filter(jugador => jugador.nacionalidad === "Argentina");
arg.forEach(jugador => console.log(jugador.nombre));

// Consulta b. Listar todos los jugadores que tengan peso entre 75 y 80 kg
console.log("\nJugadores con peso entre 75 y 80 kg:");
const kg = jugadores.filter(jugador => jugador.peso >= 75 && jugador.peso <= 80);
kg.forEach(jugador => console.log(jugador.nombre));

// Consulta c. Mostrar el jugador más alto
let alto = jugadores[0];
jugadores.forEach(jugador => {
    if (jugador.estatura > alto.estatura) {
        alto = jugador;
    }
});
console.log("\nEl jugador más alto es: " + alto.nombre);
