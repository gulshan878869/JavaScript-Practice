async function getUser() {
    return "User Data Loaded";
}

async function showUser() {
    let data = await getUser();
    console.log(data);
}

showUser();