"use strict";
var Roles;
(function (Roles) {
    Roles["Admin"] = "Admin";
    Roles["User"] = "User";
    Roles["Guest"] = "Guest";
})(Roles || (Roles = {}));
const user = {
    name: 'John',
    age: 20,
    email: 'john@example.com',
    role: Roles.Admin
};
console.log(user);
function checkPermission(role) {
    console.log('Checking permission for role:', role);
    if (role === Roles.Admin) {
        console.log('User has admin permission');
    }
    if (role === Roles.User) {
        console.log('User has user permission');
    }
    if (role === Roles.Guest) {
        console.log('User has guest permission');
    }
}
checkPermission(Roles.Admin);
checkPermission(Roles.User);
