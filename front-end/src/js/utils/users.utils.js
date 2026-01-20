
window.getUsers = function () {
    const users = localStorage.getItem("users")
    return users ? JSON.parse(users) : [];
}

window.saveUser = function (userData) {
    const users = getUsers();
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));
    toast("Registro exitoso");
    window.location.href = "login.html";
};

window.logInUser = function (user) {
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast("Inicio de sesión exitoso");
    window.location.href = "menu.html";
}

window.logOutUser = function () {
    localStorage.removeItem("loggedInUser");
    toast("Sesión cerrada con éxito");
    window.location.href = "login.html";
};

