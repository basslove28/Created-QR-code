function generateQRCode() {
    let source = document.getElementById("source").value;
    if (source) {
        let qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";

        new QRious({
            element: qrcodeContainer,
            value: source
        });


        document.getElementById("container").style.display = "block";

    } else {
        alert("Please enter a valid URL");
    }
}