$(document).ready(function () {
    $("#login-form").on("submit", function (event) {
        event.preventDefault();

        const email = $("#login-email").val();
        const password = $("#login-password").val();
        const users = getUsers();
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            window.location.href = "menu.html";
        } else {
            alert("Correo electrónico o contraseña incorrectos.");
        }
    });
});

import { getUsers } from "../utils/auth.utils.js";

