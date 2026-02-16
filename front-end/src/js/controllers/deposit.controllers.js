$(document).ready(function () {
    $(".deposit-form").on("submit", function (event) {
        event.preventDefault();
        const depositAmount = Number($("#deposit-amount").val());
        const depositDescription = $("#deposit-description").val();
        
        const movement = {
            id: Date.now().toString(),
            type: "deposit",
            amount: depositAmount,
            date: Date.now(),
            description: depositDescription || "Sin descripcion",
            counterparty: "Mi cuenta"
        }


        alert("Depósito exitoso");
        updateBalance(depositAmount, "deposit");
        saveMovement(movement);
        renderMovements();
        this.reset();
    });
});








