window.renderContactTable = function () {
    const contacts = getContacts();
    const container = $("#contacts-table-body");

    container.empty();

    if (contacts.length === 0) {
        container.append(`
            <p class="text-muted text-center">No hay contactos guardados</p>
        `);
        return;
    }

    const listGroup = $('<div class="list-group"></div>');

    contacts.forEach(contact => {
        const fullName = formatContactName(contact);

        const contactItem = $(`
            <a href="#" class="list-group-item list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                    <div>
                    <h5 class="mb-1">${fullName}</h5>
                    <p class="mb-1">${contact.email}</p>
                    <p class="mb-1">${contact.phoneNumber}</p>
                    <p class="mb-1">${contact.transferNumber}</p>
                    <small>${contact.description}</small>
                    </div>

                            <button class="btn btn-sm btn-outline-danger delete-contact-btn">
            <i class="bi bi-trash"></i>
        </button>
                </div>
            </a>
        `);

        contactItem.find(".delete-contact-btn").on("click", function () {
            deleteContact(contact.email);
            renderContactTable();
        });

        listGroup.append(contactItem);
    });

    container.append(listGroup);
}

document.addEventListener("DOMContentLoaded", () => {
    renderContactTable();
});


$(document).ready(function () {
    $("#contact-form").on("submit", function (event) {
        event.preventDefault();

        const contactFirstName = $("#contact-first-name").val();
        const contactLastName = $("#contact-last-name").val();
        const contactEmail = $("#contact-email").val();
        const contactNumber = $("#contact-phone-number").val();
        const contactTransferNumber = $("#contact-transfer-number").val();
        const contactDescription = $("#contact-description").val();

        const contactData = {
            firstName: contactFirstName,
            lastName: contactLastName,
            email: contactEmail,
            phoneNumber: contactNumber,
            transferNumber: contactTransferNumber,
            description: contactDescription || "Sin descripcion"
        };

        saveContact(contactData);
        this.reset();
        renderContactTable();
    });
    renderContactTable();
});




