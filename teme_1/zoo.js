import { Animal } from "./animal.js";
import { Bird } from "./birds.js";
import { Pinguin } from "./pinguin.js";



let animal = new Animal(2);

let bird = new Bird(2, 2);

let pinguin = new Pinguin(2, 2);


animal.walk();

bird.walk();
bird.fly();


pinguin.fly();