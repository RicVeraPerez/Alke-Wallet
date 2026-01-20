window.formatBalance = function (balance, decimals = 2) {
  if (isNaN(balance) || balance === null) {
    return '0.00';
  }
  return parseFloat(balance).toFixed(decimals);
}

window.parseBalance = function (balanceStr) {
  const parsed = parseFloat(balanceStr);
  return isNaN(parsed) ? 0 : parsed;
}

window.getBalance = function() {
  const balance = localStorage.getItem("userBalance");
  return balance ? parseFloat(balance) : 0;
}

window.setBalance = function (newBalance) {
  localStorage.setItem("userBalance", parseFloat(newBalance).toString());
}

window.updateBalance = function (amount, action) {
    const currentBalance = getBalance();
    const parsedAmount = parseFloat(amount);

    if (isNaN(parsedAmount) || parsedAmount <= 0) {
        throw new Error("El monto proporcionado no es válido");
    }

    if (action === "withdraw" && parsedAmount > currentBalance) {
        throw new Error("Fondos insuficientes");
    }

    if (action === "deposit") {
        setBalance(currentBalance + parsedAmount);
    }

    if (action === "withdraw") {
        setBalance(currentBalance - parsedAmount);
    }

    return getBalance();
}
