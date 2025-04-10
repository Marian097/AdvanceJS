import { User } from "./User.js";



class Admin extends User {
    constructor(username, email, rol)
    {
        super(username, email)
        this.rol = rol;
    }


    salut(){
        console.log(`Salut, sunt ${this.username}, rolul meu este ${this.rol}`);
    }

    static creazaAdmin(){
        return new Admin ("admin_default", "admin@email.com", "SuperAdmin");
    }
}



export { Admin };