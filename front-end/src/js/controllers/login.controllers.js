


$(document).ready(function () {
    $("#login-form").on("submit", function (event) {
        event.preventDefault();

        const email = $("#login-email").val();
        const password = $("#login-password").val();
        const users = getUsers();
        const user = users.find(user => user.email === email && user.password === password);

        logInUser(user);
        this.reset();
    });
});
