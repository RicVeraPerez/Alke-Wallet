$(document).ready(function () {
    $("#sendmoney-form").on("submit", function (event) {
        event.preventDefault();

        const recipientEmail = $("#recipient-email").val();
        const sendAmount = parseFloat($("#send-amount").val());
        if (isNaN(sendAmount) || sendAmount <= 0) {
            alert("Por favor, ingresa un monto válido para enviar.");
            return;
        }
        let currentBalance = parseFloat(localStorage.getItem("balance")) || 0;
        if (sendAmount > currentBalance) {
            alert("Fondos insuficientes para completar la transacción.");
            return;
        }
        currentBalance -= sendAmount;
        localStorage.setItem("balance", currentBalance.toString());
        alert(`Envío exitoso de $${sendAmount.toFixed(2)} a ${recipientEmail}. Tu nuevo saldo es: $${currentBalance.toFixed(2)}`);
        this.reset();
    });
});