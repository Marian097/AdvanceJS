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
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(bonus, name, baseSalary) {
        var _this = _super.call(this, name, baseSalary) || this;
        _this.bonus = bonus;
        return _this;
    }
    Programmer.prototype.getDetails = function () {
        return "Programmer: ".concat(this.name);
    };
    Programmer.prototype.calculateSalary = function () {
        return this.baseSalary + this.bonus;
    };
    return Programmer;
}(ICalculable_1.Employee));
var programmer = new Programmer(1000, "Marin", 4000);

console.log(programmer.calculateSalary())
console.log(programmer.getDetails())