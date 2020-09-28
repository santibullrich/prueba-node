let curso = {
    alumnos: 32,
    profe: "Santi",
    horario: "8.30 a 12hs",
    notificacion: function () {
        return "El horario del curso es: " + this.horario;
    }
}

console.log(curso.notificacion());

// Creando nuevos cursos

function Autos(marca, modelo, año) {
    this.marca = marca,
    this.modelo = modelo,
    this.año = año
} ;

let peugeot = new Autos("Peugeot", 206, 2005);
let chevrolet = new Autos("Chevrolet", "Corsa", 2007);

console.log(peugeot);
console.log(chevrolet);

let videojuego = "Fifa";

let videoJuegoFavorito = videojuego == "League of Legends"?"Mi videojuego favorito es el Lol":"Este no es mi videojuego favorito";

console.log(videoJuegoFavorito);

let semaforo = "Rojo";

switch (semaforo) {
    case "Verde":
        console.log ("Podés cruzar");
        break;
    case "Amarillo":
        console.log ("Precaución");
        break;
    case "Rojo":
        console.log ("No cruzar");
        break;
    default:
        console.log ("No funciona el semáforo");
        break;
}

function count(desde, hasta) {
    let contador = 0
        while (contador <= 6) {
        console.log ("El número actual es " + desde + "y es menor a " + hasta);
        desde = contador++;
        hasta = 6;
    }
}