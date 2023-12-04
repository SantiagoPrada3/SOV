function validarCredenciales() {
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    if (correo.endsWith('@vallegrande.edu.pe')) {
        alert('Correo válido.');

        if (contrasena.length >= 6) {
            alert('Acceso permitido para ' + correo);
            // Aquí podrías redirigir al usuario a una página de bienvenida
        } else {
            alert('La contraseña debe tener al menos 6 caracteres.');
        }
    } else {
        alert('Acceso denegado. Ingresa un correo válido de vallegrande.edu.pe');
    }
}