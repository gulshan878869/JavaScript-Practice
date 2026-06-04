const user = {
    name: "Gulshan",
    age: 22
};

const address = {
    city: "Patna",
    state: "Bihar"
};

const profile = {
    ...user,
    ...address
};

console.log(profile);