
    export function getDepositAmounts() {
    const deposits = localStorage.getItem("userDepositAmounts");
    return deposits ? JSON.parse(deposits) : [];
    }

    export function saveDepositAmount(depositData) {
    const deposits = getDepositAmounts();
    deposits.push(depositData);
    localStorage.setItem("userDepositAmounts", JSON.stringify(deposits));
    }

    export function deleteDepositAmount(depositId) {
    let deposits = getDepositAmounts();
    deposits = deposits.filter(deposit => deposit.id !== depositId);
    localStorage.setItem("userDepositAmounts", JSON.stringify(deposits));
    }

    export function formatDepositAmount(amount) {
    return parseFloat(amount).toFixed(2);
    }

    