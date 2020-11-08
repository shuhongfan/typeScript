// 1.字符数据类型
let aName:string='貂蝉'

// 2.数值类型
let dAge:number=18
dAge=18.13
dAge=-17

// 3.布尔值类型
let isSingleDog:boolean=true
isSingleDog=false
// isSingleDog=1

// 4.undefind 和 null
let undef:undefined=undefined
let null1:null=null

// 6.数组 元素类型固定
let arrJS=[1,'a',true,[],{}]

let arrHero:string[]=['貂蝉','安其拉','大乔']
// 方式一
let arrHeroAge:number[]=[18,21,27]
// 方式二
let arrHeroAge2:Array<number>=[18,21,27]

// 7.元组 就是一个已知元素数量和每个元素类型的数组 内部的元素类型不必相同
// 声明时，要指定元素个数
let tup1:[string,number,boolean]=['讨厌，死鬼~~~',18,true]
tup1=['死鬼',19,false]
console.log(tup1[0])
console.log(tup1.length)

// 8.枚举 用一组标识 来代表数值
enum Gender{
    Boy=1,
    Girl=2,
    Unknow=3
}

console.log(Gender.Boy)
console.log(Gender.Girl)
console.log(Gender.Unknow)


enum Gender2{
    Boy,
    Girl,
    Unknow
}

console.log(Gender2.Boy)
console.log(Gender2.Girl)
console.log(Gender2.Unknow)

let userSex=Gender.Boy
console.log(userSex)

if (userSex==Gender.Boy){
    console.log('相等')
} else {
    console.log(userSex)
}


// 9. any代表任意类型 一般在获取dom时使用
let txtName:any=document.getElementById('')

// 10.void 代表没有类型 一般在无返回值的函数

// 11.never 代表不存在的值的类型 常用作抛出异常或无限循环的函数返回类
