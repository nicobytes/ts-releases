enum Roles {
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest'
}

interface User {
  name: string;
  age: number;
  email: string;
  role: Roles;
}

const user: User = {
  name: 'John',
  age: 20,
  email: 'john@example.com',
  role: Roles.Admin
}

console.log(user);

function checkPermission(role: Roles): void {
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


const user: User = {
  name: 'John',
  age: 20,
  email: 'john@example.com',
  role: 'Admin' // reflexibility
}