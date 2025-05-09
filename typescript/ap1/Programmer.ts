import { Employee } from "./ICalculable";

class Programmer extends Employee{
    protected bonus: number;
    constructor(bonus:number, name:string, baseSalary:number){
       super(name, baseSalary)
        this.bonus = bonus;     
    }

    getDetails(): string {
        return `Programmer: ${this.name}`
    }

    calculateSalary(): number {
        return this.baseSalary + this.bonus;
    }
}


let programmer:Programmer = new Programmer(1000, "Marin", 4000);
