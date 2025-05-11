var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(salariuFix, name, email) {
        var _this = _super.call(this, name, email) || this;
        _this.salariuFix = salariuFix;
        return _this;
    }
    Employee.prototype.getDetails = function () {
        return "Nume: ".concat(this.name, "\n                Email: ").concat(this.email);
    };
    Employee.prototype.calculatePayment = function () {
        return this.salariuFix;
    };
    return Employee;
}(Person));
;
var Freelancer = /** @class */ (function (_super) {
    __extends(Freelancer, _super);
    function Freelancer(oreLucrate, tarifOra, name, email) {
        var _this = _super.call(this, name, email) || this;
        _this.oreLucrate = oreLucrate;
        _this.tarifOra = tarifOra;
        return _this;
    }
    Freelancer.prototype.getDetails = function () {
        return "Numele meu este ".concat(this.name, ", sunt Freelancer, lucrez ").concat(this.oreLucrate, "/saptamana si sunt platit cu ").concat(this.tarifOra, " lei/ora.\n        Contact: ").concat(this.email);
    };
    Freelancer.prototype.calculatePayment = function () {
        return this.oreLucrate * this.tarifOra;
    };
    return Freelancer;
}(Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(bonus, name, salariuFix, email) {
        var _this = _super.call(this, salariuFix, name, email) || this;
        _this.bonus = bonus;
        return _this;
    }
    Manager.prototype.calculatePayment = function () {
        return this.bonus + this.salariuFix;
    };
    return Manager;
}(Employee));
;
var employee = new Employee(5000, "Marian", "lungumarian15@gmail.com");
var freelancer = new Freelancer(40, 30, "Alexandra", "marcuale@gmail.com");
var manager = new Manager(1000, "Marian", 5000, "lungumarian15@gmail.com");
var people = [employee, freelancer, manager];


people.forEach(p => {
    console.log(p.getDetails())
    console.log(p.calculatePayment())
})
