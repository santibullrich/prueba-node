let listaDeTareas = [

    {
        titulo: "Repasar JSON",
        estado: "Terminada"
    },
    {
        titulo: "Comprar salsa de tomate",
        estado: "Pendiente"
    },
    {
        titulo: "Cortar a las 21:15h",
        estado: "Pendiente"
    }
]

function imprimirTitulos(tareas) {
    console.log("")
    console.log("Estas son todas las tareas")
    console.log("---------------------------------")
    for(let i = 0; i < tareas.length; i++) {
        console.log( (i+1) + ". " + tareas[i].titulo )
    }
}

console.log(imprimirTitulos(listaDeTareas))