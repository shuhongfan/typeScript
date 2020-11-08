"use strict";
var DataHelper = /** @class */ (function () {
    // 构造函数
    function DataHelper(dataKey, primaryKey) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    // 读取
    DataHelper.prototype.readData = function () {
        // 1.读取本地数据 根据datakey读取
        var strData = localStorage.getItem(this.dataKey);
        // 2. 将读取的json数组字符串 转成数组对象
        var arrData = [];
        if (strData !== null) {
            arrData = JSON.parse(strData);
        }
        // 3.返回 数组对象
        return arrData;
    };
    // 保存数据
    DataHelper.prototype.saveData = function (arrData) {
        var str = JSON.stringify(arrData);
        localStorage.setItem(this.dataKey, str);
    };
    // 新增数据
    DataHelper.prototype.addData = function (conStr) {
        // 1.读取本地现有数据
        var arr = this.readData();
        // 2.创建一个评论对象 并设置评论内容属性
        var obj = {
            content: conStr,
        };
        // 3.自动生成 主键id值
        var newID = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
        // 4.将id通过中括号访问法 添加到 对象
        obj[this.primaryKey] = newID;
        // 5.将添加了主键值的对象 添加到数组
        arr.push(obj);
        // 6.将数组保存到localStrorage中
        this.saveData(arr);
        // 7.返回id
        return newID;
    };
    // 删除数据
    DataHelper.prototype.removeDataById = function (id) {
        var _this = this;
        // 读取本地数组
        var arr = this.readData();
        // 查找要删除评论对象的下标
        var index = arr.findIndex(function (item) { return item[_this.primaryKey] == id; });
        // 如果下标大于-1 则删除数组中该下标元素对象 并返回true
        if (index > -1) {
            arr.splice(index, 1);
            // 保存到本地
            this.saveData(arr);
            return true;
        }
        return false;
    };
    return DataHelper;
}());
