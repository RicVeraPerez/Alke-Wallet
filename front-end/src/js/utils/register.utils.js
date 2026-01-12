(document).ready(function () {
    $("#register-form").on("submit", function (event) {
        event.preventDefault();

        const registerName = $("#first-name-data").val();
        const registerLastName = $("#last-name-data").val();
        const registerEmail = $("#email-data").val();
        const registerRut = $("#rut-data").val();
        const registerPassword = $("#password-data").val();
        const registerConfirmPassword = $("#confirm-password-data").val();

        const checkIsPasswordValid = checkPasswordConfirm(registerPassword, registerConfirmPassword);

        if (!checkIsPasswordValid) {
            return;
        }

        const userData = {
            name: registerName,
            lastName: registerLastName,
            email: registerEmail,
            rut: registerRut,
            password: registerPassword,
        };

        const users = getUsers();
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));

        this.reset();
        renderUserTable();
    });
});
