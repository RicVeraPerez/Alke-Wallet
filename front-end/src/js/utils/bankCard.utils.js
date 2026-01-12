
    export function getBankCards () {
    const cards = localStorage.getItem("userBankCards");
    return cards ? JSON.parse(cards) : [];
    }

    export function saveBankCard (cardData) {
    const cards = getBankCards();
    cards.push(cardData);
    localStorage.setItem("userBankCards", JSON.stringify(cards));
    }

    export function deleteBankCard (cardNumber) {
    let cards = getBankCards();
    cards = cards.filter(card => card.number !== cardNumber);
    localStorage.setItem("userBankCards", JSON.stringify(cards));
    }

    export function formatCardNumber (cardNumber) {
    return cardNumber.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
    