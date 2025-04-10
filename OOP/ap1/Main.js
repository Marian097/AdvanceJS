import { Admin  } from "./Admin.js";
import { User } from "./User.js";

let user = new User("lungumarian", "lungumarian15@gmail.com")
let admin = new Admin("lungumarian", "lungumarian15@gmail.com", "Programator");



console.log(user.info);
user.salut();

console.log(admin.info);
admin.salut();

let defaultAdmin = Admin.creazaAdmin();

console.group(defaultAdmin.info);
defaultAdmin.salut()
