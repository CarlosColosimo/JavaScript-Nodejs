class CAutores {
    constructor(nombre, apellido, NAC, mjObra, año, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = NAC;
        this.mjObra = mjObra;
        this.año = año;
        this.edad = edad;
    }
}
const autores = [
    new CAutores("Gabriel", "Garcia Márquez", "Colombiano", "Cien años de soledad", 1967, 40),
    new CAutores("Julio", "Cortazar", "Argentino", "Rayuela", 1963, 48),
    new CAutores("Isabel", "Allende", "Chilena", "La casa de los espíritus", 1982, 40),
    new CAutores("Jorge Luis", "Borges", "Argentino", "Ficciones", 1944, 45),
    new CAutores("Clarice", "Lispector", "Brasileña", "La hora de la estrella", 1977, 56),
    new CAutores("Juan", "Rulfo", "Mexicano", "Pedro Paramo", 1955, 38),
    new CAutores("Carlos", "Fuentes", "Mexicano", "La region más transparente", 1958, 29),
    new CAutores("Eduardo", "Galeano", "Uruguayo", "Las venas abiertas de America Latina", 1971, 31)
];

// Consulta a. Listar todos los autores que sean de nacionalidad argentina
console.log("Autores de nacionalidad argentina:");
const arg = autores.filter(autor => autor.nacionalidad === "Argentino");
arg.forEach(autor => console.log(`${autor.nombre} ${autor.apellido}`));

// Consulta b. Listar todos los autores que publicaron entre 1960 a 1980
console.log("\nAutores que publicaron entre 1960 y 1980:");
const autores60a80 = autores.filter(autor => autor.año >= 1960 && autor.año <= 1980);
autores60a80.forEach(autor => console.log(`${autor.nombre} ${autor.apellido}`));

// Consulta c. Mostrar el promedio de la edad de publicacion
const prom = autores.reduce((total, autor) => total + autor.edad, 0) / autores.length;
console.log("\nPromedio de la edad de publicacion:", prom.toFixed(2));

// Consulta d. Mostrar todos los autores
console.log("\nTodos los autores:");
autores.forEach(autor => console.log(`${autor.nombre} ${autor.apellido}`));
