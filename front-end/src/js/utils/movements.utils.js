window.getMovements = function () {
    const movements = localStorage.getItem("userMovements");
    return movements ? JSON.parse(movements) : [];
}

window.saveMovement = function(movementData) {
    const movements = getMovements();
    movementData.amount = Number (movementData.amount);
    movements.unshift(movementData);
    localStorage.setItem("userMovements", JSON.stringify(movements));
}

