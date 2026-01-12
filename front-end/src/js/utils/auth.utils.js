



/* Proteccion de rutas */

export function protectRoute() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (!loggedInUser) {
        window.location.href = "login.html";
    }
}


/* checkea si las contraseñas del registro son iguales todo: checkeo en tiempo real */

export function checkPasswordConfirm(registerPassword, registerConfirmPassword) {
    if (registerPassword !== registerConfirmPassword) {
        alert("Ambas contraseñas deben coincidir");
        return false;
    }
    return true;
}

/* Guardar usuario en DB (localstorage) todo: implementarla bien en el login*/

export function saveUser(userData) {
    const users = getUsers();
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
}

/* todo: funcion de cierre de sesion */

export function logoutUser() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

/* Obtener usuarios de DB (localstorage) todo: implementarla bien en el login*/

export function getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
}


