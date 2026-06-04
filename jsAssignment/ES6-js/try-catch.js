async function login() {
    try {
        let success = true;

        if (!success) {
            throw new Error("Login Failed");
        }

        console.log("Login Successful");
    } catch (error) {
        console.log(error.message);
    }
}

login();