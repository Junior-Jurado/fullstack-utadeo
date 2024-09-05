function generarQR() {
    const qrText = document.getElementById('qrText').value;
    const qrCodeDiv = document.getElementById('qrCode');
    const btnDescargar = document.getElementById('btnDescargar');

    if (qrText.trim() === "") {
        alert("Por favor, ingrese un texto válido para generar el código QR.");
        return;
    }

    qrCodeDiv.innerHTML = "";

    const qr = new QRCode(qrCodeDiv, {
        text: qrText,
        width: 128,
        height: 128
    });

    btnDescargar.style.display = "inline-block";
}

function descargarQR() {
    const qrCodeDiv = document.getElementById('qrCode').getElementsByTagName('img')[0];
    if (qrCodeDiv) {
        const link = document.createElement('a');
        link.href = qrCodeDiv.src;
        link.download = 'qr_code.png';
        link.click();
    } else {
        alert("Primero debe generar un código QR.");
    }
}
