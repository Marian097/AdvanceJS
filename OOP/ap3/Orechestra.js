import { Chitara } from "./Chitara.js";
import { Toba } from "./Toba.js";
import { Vioara } from "./Vioara.js";




let chitara = new Chitara();
let toba = new Toba();
let vioara = new Vioara();



let array = [chitara, toba, vioara]

array.forEach(melodie => {
    melodie.sunet()
});