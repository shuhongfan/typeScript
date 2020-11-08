"use strict";
// 1.函数 返回值 类型
function sayHi() {
    return 'hi~~~ old driver~~~';
}
var res1 = sayHi();
console.log(res1);
function jumpSan(cityName) {
    console.log('兄弟，跳哪里？');
    console.log("\u5F53\u65E5\u53BB\u4F60\u5FC3\u91CC~~\uFF0C\u8DF3\u53BB" + cityName);
}
jumpSan('P城');
// ts中 实参必须和形参的类型一致
// tszhong实参和形参的数量必须一致
// jumpSan('p城','g港')
// 函数默认值
function buyGun(gunName, count) {
    if (gunName === void 0) { gunName = 'm416'; }
    if (count === void 0) { count = 1; }
    console.log("\u6709\u773C\u5149~\u3010" + gunName + "\u3011\u662F\u6751\u91CC\u6700\u9753\u7684\u67AA\uFF0C\u9001\u4F60\u3010" + count + "\u3011\u628A\uFF0C\u54B1\u4EECp\u57CE\u89C1~~~");
}
buyGun('m46', 3);
buyGun('AK47');
buyGun();
buyGun(undefined, 5);
// 剩余参数 ...restOfNum:number[]
function add(x, y) {
    var restOfNum = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        restOfNum[_i - 2] = arguments[_i];
    }
    var resNum = x + y;
    for (var _a = 0, restOfNum_1 = restOfNum; _a < restOfNum_1.length; _a++) {
        var argument = restOfNum_1[_a];
        resNum += argument;
    }
    console.log(resNum);
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
