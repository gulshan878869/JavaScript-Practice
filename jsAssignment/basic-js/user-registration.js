function registerUser(name, email) {
    let user = {
        name: name,
        email: email
    };

    return user;
}

console.log(registerUser("Gulshan", "gulshan@gmail.com"));