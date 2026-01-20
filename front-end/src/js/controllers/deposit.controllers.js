

$(document).ready(function () {
    $("#deposit-form").on("submit", function (event) {
        event.preventDefault();

        const depositAmount = $("#deposit-amount").val();
        const depositDescription = $("#deposit-description").val();
        
        const movement = {
            id: Date.now().toString(),
            type: "deposit",
            amount: depositAmount,
            date: Date.now(),
            description: depositDescription || "Sin descripcion",
            counterparty: "Mi cuenta"
        }



        updateBalance(depositAmount, "deposit");
        saveMovement(movement);
        this.reset();
    });
});

