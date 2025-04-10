class User{
 constructor(username, email)
    {
        this.username = username;
        this.email = email;
    }

    get info(){
        return `Username: ${this.username}; Email: ${this.email}`;
    }


    salut(){
        console.log(`Salut, sunt ${this.username}`);
    }


}



export { User };