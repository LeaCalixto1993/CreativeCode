// Función para encriptar el nombre usando cifrado César
function encrypt(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt();
            const offset = char.toLowerCase() === char ? 97 : 65;
            return String.fromCharCode(((code - offset + shift) % 26 + 26) % 26 + offset);
        }
        return char;
    }).join('');
}

// Función para desencriptar el nombre usando cifrado César
function decrypt(text, shift) {
    return encrypt(text, -shift);
}

// Manejo del evento de envío del formulario
document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario y la recarga de la página

    const name = document.getElementById('name').value;
    const key = document.getElementById('key').value;

    if (key === '123') { // Verificar la clave
        const encryptedName = encrypt(name, 3); // Encriptar el nombre
        const decryptedName = decrypt(encryptedName, 3); // Desencriptar el nombre para mostrarlo

        // Mostrar el resultado y ocultar el formulario
        document.getElementById('attendanceForm').classList.add('hidden');
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('encryptedName').value = encryptedName;
        document.getElementById('decryptedName').value = decryptedName;

        console.log('Nombre Original:', name); // Mostrar el nombre original en la consola
    } else {
        alert('Clave incorrecta. Inténtalo de nuevo.');
    }
});

// Manejo del evento del botón de regreso al inicio
document.getElementById('backButton').addEventListener('click', function() {
    document.getElementById('attendanceForm').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');
    document.getElementById('name').value = '';
    document.getElementById('key').value = '';
});
