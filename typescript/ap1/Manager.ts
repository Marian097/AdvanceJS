import { Employee } from "./ICalculable";


class Manager extends Employee{
    private teamSize: number;
    private bonusPerMember: number;
    constructor(teamSize, bonusPerMember, name, baseSalary)
    {
        super(name, baseSalary)
        this.teamSize = teamSize;
        this.bonusPerMember = bonusPerMember;
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Numele meu este ${this.name}, am o echipa formata din ${this.teamSize} programatori`
    }

    calculateSalary(): number {
        return (this.baseSalary * this.teamSize) + (this.bonusPerMember* this.teamSize);
    }
}


let manager: Manager = new Manager(10, 500, "Marian", 3000);