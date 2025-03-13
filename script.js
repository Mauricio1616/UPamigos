// Lista de usuarios con contraseñas y mensajes
const usuarios = {
    "879M": { nombre: "Jessi", mensaje: Querida Jessi,\n\nRecuerdo el día que te conocí jugando UNO como si fuera ayer... },
    "765H": { nombre: "Carlos Viruez", mensaje: Hola Carlos,\n\nDesde que te conocí en el grupo de UP, supe que eras alguien especial... },
    "534M": { nombre: "Arianne", mensaje: Querida Arianne,\n\nDesde el momento en que te conocí a través de Jessi... },
    "421H": { nombre: "Carlitos Lara", mensaje: Querido Carlitos,\n\nEres uno de esos amigos que siempre saben cómo hacer reír a los demás... },
    "883M": { nombre: "Laura", mensaje: Querida Laura,\n\nRecuerdo cuando te conocí en la materia de Aprendizaje... },
    "298H": { nombre: "Álvaro", mensaje: Querido Álvaro,\n\nRecuerdo cuando te conocí hace años, cuando entré a la universidad... },
    "553M": { nombre: "Gabriela", mensaje: Querida Gabriela,\n\nRecuerdo ese día en que necesité ayuda para arreglar mi moto... },
    "045H": { nombre: "Manuel", mensaje: Querido Manuel,\n\nEres un buen amigo, alguien con quien siempre es divertido compartir momentos... },
    "901M": { nombre: "Carmen", mensaje: Querida Carmen,\n\nDesde que te conocí en UP, me impresionó tu belleza interior y exterior... },
    "303H": { nombre: "Mario", mensaje: Querido Mario,\n\nEres un gran compañero de aventuras gastronómicas... },
    "667H": { nombre: "Jose Miguel Rocha", mensaje: Querido Jose Miguel Rocha, mi amigo castroso, gay y homofóbico (¡broma!)... },
    "773M": { nombre: "Ericka", mensaje: Querida Ericka,\n\nAunque no hablamos mucho, siempre te he considerado una amiga muy especial... },
    "809H": { nombre: "Marco", mensaje: Querido Marco,\n\nEres un gran amigo, alguien en quien siempre puedo confiar... },
    "631M": { nombre: "Estefani", mensaje: Querida Estefani,\n\nEres una amiga muy ocurrente y divertida, siempre me haces reír... },
    "000H": { nombre: "Julito", mensaje: Querido Julito,\n\nEres un gran amigo, un ángel inocente... ¡o al menos eso parecía!... },
    "696M": { nombre: "Lucero", mensaje: Querida Lucero,\n\nAl principio te veía como una persona seria y reservada, pero qué sorpresa... },
    "969H": { nombre: "Christopher", mensaje: Querido Christopher,\n\nEres un gran amigo, un verdadero héroe. Me ayudaste a organizar mi primer campeonato... },
    "001H": { nombre: "Cristhian", mensaje: Querido Cristhian,\n\nTe conocí en la U hace un tiempo, pero solo de vista... },
    "220M": { nombre: "Mila", mensaje: Querida Mila,\n\nEres una amiga única, y eso es un eufemismo. Conocerte en el grupo de UP fue un regalo... },
    "999M": { nombre: "Rebeca", mensaje: Querida Rebeca,\n\nEres una buena amiga y siempre me haces reír... }
};

// Función para validar contraseña
function validarContraseña() {
    const inputContraseña = document.getElementById("contraseña").value;
    const mensajeDiv = document.getElementById("mensaje");
    const sobreDiv = document.getElementById("sobre");

    if (usuarios[inputContraseña]) {
        const usuario = usuarios[inputContraseña];
        const colorSobre = inputContraseña.endsWith("M") ? "rosado" : "amarillo";

        // Mostrar el sobre con el nombre
        sobreDiv.innerHTML = `<div id="sobre-img" class="${colorSobre}" onclick="mostrarMensaje('${inputContraseña}')">
                                <p>${usuario.nombre}</p>
                              </div>`;
        sobreDiv.style.display = "block";
        mensajeDiv.style.display = "none";
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

// Función para mostrar el mensaje
function mostrarMensaje(contraseña) {
    const usuario = usuarios[contraseña];
    const mensajeDiv = document.getElementById("mensaje");

    mensajeDiv.innerHTML = `<p>${usuario.mensaje.replace(/\n/g, "<br>")}</p>
                            <textarea id="comentario" placeholder="Escribe tu respuesta aquí..."></textarea>
                            <button onclick="enviarComentario('${usuario.nombre}')">Enviar</button>`;
    mensajeDiv.style.display = "block";
}

// Función para enviar comentario (simulado)
function enviarComentario(nombre) {
    const comentario = document.getElementById("comentario").value;
    if (comentario.trim() === "") {
        alert("Por favor, escribe un comentario antes de enviar.");
        return;
    }
    alert(Tu respuesta ha sido enviada a Fidel: ${comentario});
}