"use strict";
// 1.字符数据类型
var aName = '貂蝉';
// 2.数值类型
var dAge = 18;
dAge = 18.13;
dAge = -17;
// 3.布尔值类型
var isSingleDog = true;
isSingleDog = false;
// isSingleDog=1
// 4.undefind 和 null
var undef = undefined;
var null1 = null;
// 6.数组 元素类型固定
var arrJS = [1, 'a', true, [], {}];
var arrHero = ['貂蝉', '安其拉', '大乔'];
// 方式一
var arrHeroAge = [18, 21, 27];
// 方式二
var arrHeroAge2 = [18, 21, 27];
// 7.元组 就是一个已知元素数量和每个元素类型的数组 内部的元素类型不必相同
// 声明时，要指定元素个数
var tup1 = ['讨厌，死鬼~~~', 18, true];
tup1 = ['死鬼', 19, false];
console.log(tup1[0]);
console.log(tup1.length);
// 8.枚举 用一组标识 来代表数值
var Gender;
(function (Gender) {
    Gender[Gender["Boy"] = 1] = "Boy";
    Gender[Gender["Girl"] = 2] = "Girl";
    Gender[Gender["Unknow"] = 3] = "Unknow";
})(Gender || (Gender = {}));
console.log(Gender.Boy);
console.log(Gender.Girl);
console.log(Gender.Unknow);
var Gender2;
(function (Gender2) {
    Gender2[Gender2["Boy"] = 0] = "Boy";
    Gender2[Gender2["Girl"] = 1] = "Girl";
    Gender2[Gender2["Unknow"] = 2] = "Unknow";
})(Gender2 || (Gender2 = {}));
console.log(Gender2.Boy);
console.log(Gender2.Girl);
console.log(Gender2.Unknow);
var userSex = Gender.Boy;
console.log(userSex);
if (userSex == Gender.Boy) {
    console.log('相等');
}
else {
    console.log(userSex);
}
// 9. any代表任意类型 一般在获取dom时使用
var txtName = document.getElementById('');
// 10.void 代表没有类型 一般在无返回值的函数
// 11.never 代表不存在的值的类型 常用作抛出异常或无限循环的函数返回类
