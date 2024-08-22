document.getElementById('acertijoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const respuesta = document.getElementById('respuesta').value.toLowerCase();
    if (respuesta === 'caperucita roja') {
        window.location.href = 'invitacion.html'; // Página de la invitación
    } else {
        document.getElementById('mensajeError').style.display = 'block';
    }
});