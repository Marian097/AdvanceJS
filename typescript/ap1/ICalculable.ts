interface ICalculable{
    calculateSalary():number
}


abstract class Employee implements ICalculable
{
   protected name : string;
   protected baseSalary: number;
   constructor(name: string, baseSalary: number)
   {
    this.name = name;
    this.baseSalary = baseSalary;
   }
   
   abstract getDetails():string;
   abstract calculateSalary(): number;
}

export {Employee};

