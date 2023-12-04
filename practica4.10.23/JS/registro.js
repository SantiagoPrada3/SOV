// Función para mostrar la tabla y añadir un registro
function mostrarTabla(datosRegistro) {
    var formulario = document.getElementById('formulario');
    var tablaRegistros = document.getElementById('tablaRegistros');
    var cuerpoTabla = document.getElementById('cuerpoTabla');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Lógica de obtención de datos del formulario
        var nombres = document.getElementById('nombres').value;
        var apellidos = document.getElementById('apellidos').value;
        var dni = document.getElementById('dni').value;
        var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
        var correo = document.getElementById('correo').value;

        // Crear una nueva fila en la tabla con los datos del formulario
        var fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${nombres}</td>
            <td>${apellidos}</td>
            <td>${dni}</td>
            <td>${fechaNacimiento}</td>
            <td>${correo}</td>
        `;

        // Agregar la fila a la tabla
        cuerpoTabla.appendChild(fila);

        // Mostrar la tabla después de agregar el primer registro
        tablaRegistros.style.display = 'block';
    });
}

mostrarTabla();
