"use strict";
var txtKeyObj = document.querySelector('#txtKey');
var txtValueObj = document.querySelector('#txtValue');
var btnAdd1 = document.querySelector('#btnAdd');
var btnRead = document.querySelector('#btnGet');
var btnDel = document.querySelector('#btnRemove');
var btnClear = document.querySelector('#btnClear');
var btnAddObj = document.querySelector('#btnAddObj');
var btnGetObj = document.querySelector('#btnGetObj');
// 1.保存数据
btnAdd1.onclick = function () {
    var strkey = txtKeyObj.value;
    var strValue = txtValueObj.value;
    localStorage.setItem(strkey, strValue);
    console.log('保存成功了');
};
// 2.取数据
btnRead.onclick = function () {
    var strkey = txtKeyObj.value;
    var strValue = localStorage.getItem(strkey);
    console.log('你取出的数据为：' + strValue);
};
// 3.删除数据
btnDel.onclick = function () {
    var strkey = txtKeyObj.value;
    localStorage.removeItem(strkey);
    console.log('您删除的数据为：' + strkey);
};
// 4.清空数据
btnClear.onclick = function () {
    localStorage.clear();
};
// 5.保存对象
btnAddObj.onclick = function () {
    var dog = {
        name: '花花',
        age: 2,
        gender: false
    };
    var strJson = JSON.stringify(dog);
    localStorage.setItem('myDog', strJson);
    console.log('保存对象成功啦！！！');
};
// 6.取对象
btnGetObj.onclick = function () {
    var strJson = localStorage.getItem('myDog');
    var obj = JSON.parse(strJson);
    console.log(obj);
};
