$(document).ready(function () {
    renderMovements();
});



window.renderMovements = function () {
    const movements = getMovements();
    const container = $("#movements-table-body");

    container.empty();

    if (movements.length === 0) {
        container.append(`
            <p class="text-muted text-center">
                No hay movimientos registrados
            </p>
        `);
        return;
    }

    const listGroup = $('<div class="list-group"></div>');

    movements.forEach(movement => {
        const isDeposit = movement.type === "deposit";
        const sign = isDeposit ? "+" : "-";
        const colorClass = isDeposit ? "text-success" : "text-danger";

        const movementItem = $(`
            <div class="list-group-item">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="mb-1">${movement.description}</h6>
                        <small class="text-muted">
                            ${new Date(movement.date).toLocaleString()}
                        </small>
                    </div>
                    <span class="fw-bold ${colorClass}">
                        ${sign} $${movement.amount}
                    </span>
                </div>
            </div>
        `);

        listGroup.append(movementItem);
    });

    container.append(listGroup);
}
