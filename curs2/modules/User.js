class User{
    #varsta //=> Definim varsta ca valoare privata.
    _email;
    constructor(id,nume){
        //setam proprietatile
        this.id=id;
        this.nume=nume
    }

    set mail(myEmail)
    {
        this._email = myEmail;
    }

    get mail(){
        return this._email;
    }

    set varsta(myAge)
    {
        this.#varsta = myAge;
    }
    
    get varsta(){
        return this.#varsta;
    }

    

    datePersonale(){
        console.log(`Salut! Numele meu este ${this.nume}, adresa de mail este 
            ${this._email}, varsta este ${this.#varsta}`);
    }
    mananca (claorii){
        console.log(`Mananca ${claorii} pe zi.`);
    }
    doarme(ore){
        console.log(`Doarme ${ore} pe zi`);
    }
}
export {User}
