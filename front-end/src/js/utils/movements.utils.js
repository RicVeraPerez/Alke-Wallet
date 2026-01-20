window.getMovements = function () {
    const movements = localStorage.getItem("userMovements");
    return movements ? JSON.parse(movements) : [];
}

window.saveMovement =  function (movement) {
    const movements = getMovements;
    movements.push(movement);
    localStorage.setItem("userMovements", JSON.stringify(movements));
}