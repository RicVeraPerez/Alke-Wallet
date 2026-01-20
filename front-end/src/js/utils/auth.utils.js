



/* Proteccion de rutas */

window.protectRoute = function () {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        window.location.href = "login.html";
    }
}


/* checkea si las contraseñas del registro son iguales todo: checkeo en tiempo real */

window.checkPasswordConfirm = function (registerPassword, registerConfirmPassword) {
    if (registerPassword !== registerConfirmPassword) {
        alert("Ambas contraseñas deben coincidir");
        return false;
    }
    return true;
}


