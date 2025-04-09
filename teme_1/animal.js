class Animal{
    constructor(legs){
        if (this.legs !== "undefined")
        {
            this.legs = legs;

        }
    }

    walk(){
        console.log(`Anmals walk in ${this.legs} legs`)
    }
}




export { Animal };