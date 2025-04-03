import { User } from "../modules/User.js";
// Modificam nume, email, varsa
let user = new User('1','ion');
user.doarme(7);
console.log(user);
user.nume = 'Dan';
user._email='ion@ion.ro'
user._email = "dan@dan.com" //=>Setter supra-scrrie metoda _email si aplica verificare
user.varsta = 25;
console.log(user);
user.datePersonale()