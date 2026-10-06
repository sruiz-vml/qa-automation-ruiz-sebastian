const casos = [
    {
        id: 1, 
        titulo: "Login válido",
        prioridad: "alta",
        ejecutado: false
    },
    {
        id: 2,
        titulo: "Registro de usuario",
        prioridad: "media",
        ejecutado: true
    },
    { 
        id: 3, 
        titulo: "Recuperación de contraseña", 
        prioridad: "baja", 
        ejecutado: false 
    },
    { 
        id: 4, 
        titulo: "Actualización de perfil", 
        prioridad: "media", 
        ejecutado: true 
    },
    { 
        id: 5, 
        titulo: "Eliminación de cuenta", 
        prioridad: "alta", 
        ejecutado: false 
    },
];
function contarPorPrioridad (casos)
{
let alta = 0;
let media = 0;
let baja = 0;

casos.forEach(casos => {
    if (casos.prioridad==="alta"){
        alta++;
    } else if (casos.prioridad==="media"){
        media++;
    } else if (casos.prioridad==="baja") {
        baja++;
    }
});
return { alta, media, baja}
}

function listarPedientes (casos){
    return casos.filter(casos=> !casos.ejecutado)
}

const formatearCaso = (caso) => {
    const estado = caso.ejecutado ? "Ejecutado" : "Pendiente";
    return `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${estado}`;
};

casos.forEach(caso => {
    console.log(formatearCaso(caso));
});

console.log("Conteo por prioridad: ", contarPorPrioridad(casos));
console.log("Casos pendientes: ", listarPedientes(casos));
