let fs = require ("fs");

let jsonDeTareas = fs.readFileSync("./tareas.json")
let listaTareasJson = JSON.parse(jsonDeTareas)

let listadoDeTareas = listaTareasJson

function imprimirTitulo(tareas) {
    console.log ("");
    console.log ("Listado de Tareas");
    console.log ("-------------");
    for (i = 0; i < tareas.length; i++) {
        console.log((i+1) + ". " + tareas[i].titulo)
    }
}

console.log (imprimirTitulo(listadoDeTareas))

function tareasPendientes(tareas) {
    console.log ("");
    console.log ("Tareas Pendientes");
    console.log ("-------------");

    let j = 1;

    for (i = 0; i < tareas.length; i++) {
        if (tareas[i].estado == "Pendiente") {
            console.log( j + ". " + tareas[i].titulo);
            j++
        }
    }
}

console.log(tareasPendientes(listadoDeTareas))