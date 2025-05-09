"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var ICalculable_1 = require("./ICalculable");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(teamSize, bonusPerMember, name, baseSalary) {
        var _this = _super.call(this, name, baseSalary) || this;
        _this.teamSize = teamSize;
        _this.bonusPerMember = bonusPerMember;
        _this.name = name;
        _this.baseSalary = baseSalary;
        return _this;
    }
    Manager.prototype.getDetails = function () {
        return "Numele meu este ".concat(this.name, ", am o echipa formata din ").concat(this.teamSize, " programatori");
    };
    Manager.prototype.calculateSalary = function () {
        return (this.baseSalary * this.teamSize) + (this.bonusPerMember * this.teamSize);
    };
    return Manager;
}(ICalculable_1.Employee));
var manager = new Manager(10, 500, "Marian", 3000);


console.log(manager.getDetails());
console.log(manager.calculateSalary());