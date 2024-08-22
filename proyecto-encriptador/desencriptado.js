document.addEventListener('DOMContentLoaded', () => {
    const decryptButton = document.getElementById('decryptButton');
    const encodedMessage = document.getElementById('encodedMessage').value;
    const decodedMessageElement = document.getElementById('decodedMessage');

    decryptButton.addEventListener('click', () => {
        const decodedMessage = atob(encodedMessage);
        decodedMessageElement.textContent = decodedMessage;
    });

    const submitCostumeButton = document.getElementById('submitCostumeButton');
    const costumeInput = document.getElementById('costumeInput');

    submitCostumeButton.addEventListener('click', () => {
        const costume = costumeInput.value.trim();
        if (costume) {
            const encodedCostume = btoa(costume); // Encriptar en base64
            let costumes = JSON.parse(localStorage.getItem('costumes')) || [];
            costumes.push(encodedCostume);
            localStorage.setItem('costumes', JSON.stringify(costumes));
            window.location.href = 'listadisfraces.html';
        } else {
            alert('Por favor, ingresa tu disfraz.');
        }
    });
});
