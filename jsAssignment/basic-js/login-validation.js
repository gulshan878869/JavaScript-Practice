function login(username, password) {
    let validUser = "Gulshan";
    let validPass = "2026";

    if (username === validUser && password === validPass) {
        return "Login Successful";
    } else {
        return "Invalid Username or Password";
    }
}

console.log(login("Gulshan", "2026"));