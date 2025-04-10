class ContBancar{
    #sold = 0;
    constructor(titular){
        this.titular = titular;
    }


    depozit(suma){
        if (suma > 0 )
        {
            this.#sold += suma;
        }
    }


    retragere(suma){
        if (suma < this.#sold)
        {
            this.#sold -= suma;
        }
    }


    get sold(){
        return this.#sold;
    }

    set sold(_){
        throw new Error("Nu poti seta soldul direct!")
    }
}



let cont = new ContBancar("Marian")

cont.depozit(100);
console.log(cont.sold);
cont.retragere(50);
console.log(cont.sold);

try {
    cont.sold = 500;
}
catch (e){
    console.error(e.message)
}