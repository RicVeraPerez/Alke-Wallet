

document.addEventListener('DOMContentLoaded', () => {
    
    const balanceElement = document.getElementById('user-balance');
    const showBalanceBtn = document.getElementById('show-balance-btn');

    let isBalanceVisible = false; 


    const renderBalance = () => { 
        if (isBalanceVisible) {
            const balance = getBalance();
            balanceElement.textContent = `$ ${formatBalance(balance)}`;
            showBalanceBtn.textContent = 'Ocultar Saldo';
        } else {
            balanceElement.textContent = '****';
            showBalanceBtn.textContent = 'Mostrar Saldo';
        }
    };

    showBalanceBtn.addEventListener('click', () => {
        isBalanceVisible = !isBalanceVisible;
        renderBalance();
    });

    renderBalance();
});

