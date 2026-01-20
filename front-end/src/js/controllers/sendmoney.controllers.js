

$(document).ready(function () {
    $("#send-money-form").on("submit", function (event) {
        event.preventDefault();

        const transferAmount = $("transfer-amount").val();
        const transferRutReceiver = $("#transfer-rut-receiver").val();
        const transferDescription = $("#transfer-description").val();

        const movement = {
            id: Date.now().toString(),
            type: "withdraw",
            amount: transferAmount,
            date: Date.now(),
            description: transferDescription || "Sin descripcion",
            counterparty: transferRutReceiver
        }

        updateBalance(transferAmount, "withdraw")
        saveMovement(movement);
        this.reset();
    });
});




