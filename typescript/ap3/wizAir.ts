interface IPassenger {
  getPriceForFlight(basePrice: number): number;
  getDetails(): string;
}

abstract class Passenger implements IPassenger {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract getPriceForFlight(basePrice: number): number;
  abstract getDetails(): string;
}

class RegularPassenger extends Passenger implements IPassenger {
  constructor(name: string) {
    super(name);    
  }

  getPriceForFlight(basePrice: number): number {
    return basePrice;
  }

  getDetails(): string {
    return this.name;
  }
}

class VIPPassenger extends Passenger implements IPassenger {
  constructor(name: string) {
    super(name);
  }

  getPriceForFlight(basePrice: number): number {
    let reduction: number = basePrice * 0.2;
    return basePrice - reduction;
  }

  getDetails(): string {
    return this.name;
  }
}

class StudentPassenger extends Passenger implements IPassenger {
  constructor(name: string) {
    super(name);
  }

  getPriceForFlight(basePrice: number): number {
    let reduction: number = basePrice * 0.5;
    return basePrice - reduction;
  }

  getDetails(): string {
    return this.name;
  }
}

class Flight {
  private destination: string;
  private basePrice: number;
  private passengers: IPassenger[];
  constructor(destination: string, price: number) {
    this.destination = destination;
    this.basePrice = price;
    this.passengers = [];
  }

  addPassenger(p: IPassenger): void {
    this.passengers.push(p);
  }

  listPassengers(): void {
    for (const p of this.passengers) {
      console.log(p.getDetails());
    }
  }

  calculateTotalRevenue():number {
    let total = 0;
    for (const p of this.passengers)
    {
        total += p.getPriceForFlight(this.basePrice)
    }

    return total;
  }

  findPassengerByName(findName:string): string{
    var found = this.passengers.find(p => p.getDetails() === findName);
    return found ? found.getDetails() : "Pasagerul nu a fost gasit"
  }
}
