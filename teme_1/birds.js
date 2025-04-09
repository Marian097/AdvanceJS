import { Animal } from "./animal.js";



class Bird extends Animal {
    constructor(legs, wings)
    {
        super(legs)
        this.wings = wings
    }



    fly(){
        console.log(`Birds walk in ${this.legs} legs and flyin with a little help from ${this.wings} wings`)
    }
}



export { Bird };
