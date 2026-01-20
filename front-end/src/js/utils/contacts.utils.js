window.formatContactName = function (contact) {
    if (!contact || typeof contact !== 'object') {
        return '';
    }

    const { firstName = '', lastName = '' } = contact;
    return `${firstName} ${lastName}`.trim();

}

window.getContacts = function () {
    const contacts = localStorage.getItem("userContacts");
    return contacts ? JSON.parse(contacts) : [];
}



window.saveContact = function (contactData) {
    const contacts = getContacts();
    contacts.push(contactData);
    localStorage.setItem("userContacts", JSON.stringify(contacts));
}

window.deleteContact = function (contactEmail) {
    let contacts = getContacts();
    contacts = contacts.filter(contact => contact.email !== contactEmail);
    localStorage.setItem("userContacts", JSON.stringify(contacts));
} 



