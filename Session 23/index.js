"use strict";
// // Union Type - A union type allows a variable to hold two or more specific types. We use a |
// Partial<T>
function updateuser(id, data) {
    console.log(id, data);
}
updateuser(1, {
    name: "Rahul",
});
updateuser(1, {
    email: "rahul@gmail.com",
});
const config = {
    appName: "My name",
    version: 1,
};
// config.appName = "New Name"
console.log(config.appName);
// Record
const permission = {
    admin: true,
    editor: true,
    viewer: false,
};
const permissions = {
    admin: true,
    editor: true,
    viewer: false,
};
const themes = {
    light: "white",
    dark: "black",
    system: "white|black",
};
console.log(themes.dark);
