class DataHelper {
    dataKey:string
    primaryKey:string
    // 构造函数
    constructor(dataKey:string,primaryKey:string) {
        this.dataKey=dataKey
        this.primaryKey=primaryKey
    }
    // 读取
    readData():any{
        // 1.读取本地数据 根据datakey读取
        let strData:string|null=localStorage.getItem(this.dataKey)
        // 2. 将读取的json数组字符串 转成数组对象
        let arrData:any=[]
        if (strData!==null){
            arrData=JSON.parse(strData)
        }
        // 3.返回 数组对象
        return arrData
    }
    // 保存数据
    saveData(arrData:Array<object>):void{
        let str:string = JSON.stringify(arrData)
        localStorage.setItem(this.dataKey,str)
    }
    // 新增数据
    addData(conStr:string):number{
        // 1.读取本地现有数据
        let arr:any=this.readData()
        // 2.创建一个评论对象 并设置评论内容属性
        let obj:object={
            content:conStr,
        }
        // 3.自动生成 主键id值
        let newID:number=arr.length>0?arr[arr.length-1][this.primaryKey]+1:1
        // 4.将id通过中括号访问法 添加到 对象
        obj[this.primaryKey]=newID
        // 5.将添加了主键值的对象 添加到数组
        arr.push(obj)
        // 6.将数组保存到localStrorage中
        this.saveData(arr)
        // 7.返回id
        return newID
    }
    // 删除数据
    removeDataById(id:string|number):boolean{
        // 读取本地数组
        let arr=this.readData()
        // 查找要删除评论对象的下标
        let index=arr.findIndex((item:any)=>item[this.primaryKey]==id)
        // 如果下标大于-1 则删除数组中该下标元素对象 并返回true
        if (index>-1){
            arr.splice(index,1)
            // 保存到本地
            this.saveData(arr)
            return true
        }
        return false
    }
}

