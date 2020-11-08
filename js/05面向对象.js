"use strict";
var City = /** @class */ (function () {
    // 构造函数
    function City(name, level) {
        // 成员变量
        this.cName = '';
        this.cLevel = 1;
        this.cName = name;
        this.cLevel = level;
    }
    // 成员方法
    City.prototype.about = function () {
        console.log("\u6B22\u8FCE\u6765\u5230\uFF1A" + this.cName + ",\u6B64\u5730\u5371\u9669\u7CFB\u6570\u4E3A\uFF1A" + this.cLevel);
    };
    return City;
}());
var c1 = new City('p城', 5);
console.log(c1.cName);
c1.about();
