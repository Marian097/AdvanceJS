interface IPlayable{
    calculatePayment(): number
}


abstract class Person{
    protected name: string;
    protected email: string;
    constructor (name: string, email:string)
    {
        this.name = name;
        this.email = email;
    }

    abstract getDetails(): string;

}



class Employee extends Person implements IPlayable{
    public salariuFix: number;
    constructor(salariuFix: number, name:string, email:string)
    {
        super(name, email)
        this.salariuFix = salariuFix;
    }

    getDetails(): string {
        return `Nume: ${this.name}
                Email: ${this.email}`
    }
    calculatePayment(): number {
        return this.salariuFix;
    }
};


class Freelancer extends Person implements IPlayable{
    public oreLucrate: number;
    public tarifOra: number;
    constructor(oreLucrate: number, tarifOra: number, name:string, email:string)
    {
        super(name, email)
        this.oreLucrate = oreLucrate;
        this.tarifOra = tarifOra;
    }

    getDetails(): string {
        return `Numele meu este ${this.name}, sunt Freelancer, lucrez ${this.oreLucrate}/saptamana si sunt platit cu ${this.tarifOra} lei/ora.
        Contact: ${this.email}`
    }

    calculatePayment():number {
        return this.oreLucrate * this.tarifOra
    }

}


class Manager extends Employee implements Employee{
    public bonus: number
    constructor(bonus: number, name: string, salariuFix: number, email: string)
    {
        super(salariuFix, name, email)
        this.bonus = bonus;
    }
    calculatePayment(): number {
        return this.bonus + this.salariuFix
    }
};



let employee:Employee = new Employee(5000, "Marian", "lungumarian15@gmail.com");
let freelancer: Freelancer = new Freelancer(40, 30, "Alexandra", "marcuale@gmail.com");
let manager: Manager = new Manager(1000, "Marian", 5000, "lungumarian15@gmail.com");


var people: IPlayable[] = [employee, freelancer, manager];

people.forEach(p => {
    console.log(p.calculatePayment())
})

