
export function formatContactName(contact) {
    if (!contact || typeof contact !== 'object') {
        return '';
    }

    const { firstName = '', lastName = '' } = contact;
    return `${firstName} ${lastName}`.trim();

}

export function getContacts() {
    const contacts = localStorage.getItem("userContacts");
    return contacts ? JSON.parse(contacts) : [];
}

export function saveContact(contactData) {
    const contacts = getContacts();
    contacts.push(contactData);
    localStorage.setItem("userContacts", JSON.stringify(contacts));
}

export function deleteContact(contactEmail) {
    let contacts = getContacts();
    contacts = contacts.filter(contact => contact.email !== contactEmail);
    localStorage.setItem("userContacts", JSON.stringify(contacts));
} 


