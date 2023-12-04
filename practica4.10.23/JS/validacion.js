// Función para validar los nombres
function validarNombres() {
    var nombres = document.getElementById("nombres").value.trim();
    var valido = /^[a-zA-Z\s]+$/.test(nombres) && nombres.length >= 2 && nombres.length <= 50;

    if (!valido && nombres.length > 0) {
        alert("Ingrese un nombre válido (solo letras y espacios, longitud entre 2 y 50 caracteres).");
    }

    return valido;
}

function validarApellidos() {
    var apellidos = document.getElementById("apellidos").value.trim();
    var valido = /^[a-zA-Z\s]+$/.test(apellidos) && apellidos.length >= 2 && apellidos.length <= 50;

    if (!valido && apellidos.length > 0) {
        alert("Ingrese un apellido válido (solo letras y espacios, longitud entre 2 y 50 caracteres).");
    }

    return valido;
}

function validarDNI() {
    var dni = document.getElementById("dni").value.trim();
    var valido = /^\d{8}$/.test(dni);

    if (!valido && dni.length > 0) {
        alert("Ingrese un DNI válido (8 dígitos numéricos).");
    }

    return valido;
}

function validarCorreo() {
    const correo = document.getElementById('correo').value;
    var valido = /^\S+@\S+\.\S+$/.test(correo) && correo.length <= 50;

    if (!valido && correo.length > 0) {
        alert("Ingrese un correo electrónico válido (longitud máxima de 50 caracteres).");
    }

    return valido;
}

function validarContrasena() {
    var contrasena = document.getElementById("contrasena").value;
    var valido = contrasena.length >= 6 && contrasena.length <= 20; // Ejemplo: longitud entre 6 y 20 caracteres

    if (!valido && contrasena.length > 0) {
        alert("La contraseña debe tener entre 6 y 20 caracteres.");
    }

    return valido;
}

function validarTerminos() {
    var aceptarTerminos = document.getElementById("terminos_condiciones").checked;

    if (!aceptarTerminos) {
        alert("Debe aceptar los términos y condiciones.");
    }

    return aceptarTerminos;
}

// Función para validar el formulario antes de enviarlo
function validarFormulario(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    var nombresValido = validarNombres();
    var apellidosValido = validarApellidos();
    var dniValido = validarDNI();
    var correoValido = validarCorreo();
    var contrasenaValido = validarContrasena();
    var aceptarTerminosValido = validarTerminos();

    var btnEnviar = document.getElementById('submitBtn');
    
    // Si todos los campos son válidos, puedes enviar el formulario
    if (nombresValido && apellidosValido && dniValido && correoValido && contrasenaValido && aceptarTerminosValido) {
        btnEnviar.disabled = false; // Activa el botón de enviar
        alert("Formulario válido. Puede enviar los datos.");
    } else {
        btnEnviar.disabled = true; // Desactiva el botón de enviar
        alert("Por favor, complete correctamente todos los campos del formulario.");
    }
}

// Función para verificar el estado de todos los campos y habilitar/deshabilitar el botón
function verificarCampos() {
    var nombresValido = validarNombres();
    // Agrega el resto de validaciones aquí...

    var btnEnviar = document.getElementById('submitBtn');
    
    // Si todos los campos son válidos, activa el botón de enviar; de lo contrario, desactívalo
    if (nombresValido && /* Agrega el resto de variables de validación */) {
        btnEnviar.disabled = false; // Activa el botón de enviar
    } else {
        btnEnviar.disabled = true; // Desactiva el botón de enviar
    }
}

// Event listeners para los campos que podrían cambiar la validez del formulario
document.getElementById("nombres").addEventListener("input", verificarCampos);
// Agrega el resto de event listeners para los campos...

// Event listener para el envío del formulario
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    // Llama a la función validarFormulario aquí si es necesario...
});

