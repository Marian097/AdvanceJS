import { Bird } from "./birds.js";



class Pinguin extends Bird{
    fly(){
        super.fly()
        console.log(`Pinguin do not flyin, but have ${this.wings} wings and they swim.`)
    }

}


export { Pinguin };