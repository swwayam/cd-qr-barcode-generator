function generateBarcode() {
    var barcodeData = document.getElementById('barcode-input').value;
    JsBarcode('#barcode', barcodeData, {
        format: 'CODE128',
        width: 1,
        height: 100,
        displayValue: true
    });
}

function generateQRCode() {
    var qrcodeData = document.getElementById('qrcode-input').value;
    var qrcodeElement = document.getElementById('qrcode');
    QRCode.toCanvas(qrcodeElement, qrcodeData, function (error) {
        if (error) console.error(error);
    });
}