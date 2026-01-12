
  export const formatBalance = (balance, decimals = 2) => {
    if (isNaN(balance) || balance === null) {
      return '0.00';
    }
    return parseFloat(balance).toFixed(decimals);
    };

    export const parseBalance = (balanceStr) => {
    const parsed = parseFloat(balanceStr);
    return isNaN(parsed) ? 0 : parsed;
    }

    export const getBalance = () => {
    const balance = localStorage.getItem("userBalance");
    return balance ? parseFloat(balance) : 0;
    }

    export const setBalance = (newBalance) => {
    localStorage.setItem("userBalance", parseFloat(newBalance).toString());
    }

    export const updateBalance = (amount) => {
    const currentBalance = getBalance();
    const updatedBalance = currentBalance + parseFloat(amount);
    setBalance(updatedBalance);
    return updatedBalance;
    }
