let isBalanceVisible = false;

window.renderBalance = function () {
    const balanceElements = document.querySelectorAll(".user-balance");
    const balance = getBalance();

    balanceElements.forEach(el => {
        el.textContent = isBalanceVisible
            ? balance.toLocaleString("es-CL")
            : "••••••";
    });
};

function toggleBalanceVisibility() {
    isBalanceVisible = !isBalanceVisible;

    const buttons = document.querySelectorAll(".show-balance-btn");
    buttons.forEach(btn => {
        btn.textContent = isBalanceVisible ? "Ocultar" : "Mostrar";
    });

    renderBalance();
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".show-balance-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", toggleBalanceVisibility);
    });

    renderBalance();
});