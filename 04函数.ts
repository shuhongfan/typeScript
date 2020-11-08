// 1.函数 返回值 类型
function sayHi():string{
    return 'hi~~~ old driver~~~'
}

let res1:string=sayHi();
console.log(res1)

function jumpSan(cityName:string):void{
    console.log('兄弟，跳哪里？')
    console.log(`当日去你心里~~，跳去${cityName}`)
}
jumpSan('P城')

// ts中 实参必须和形参的类型一致
// tszhong实参和形参的数量必须一致
// jumpSan('p城','g港')

// 函数默认值
function buyGun(gunName:string='m416',count:number=1):void{
    console.log(`有眼光~【${gunName}】是村里最靓的枪，送你【${count}】把，咱们p城见~~~`)
}
buyGun('m46',3)
buyGun('AK47')
buyGun()
buyGun(undefined,5)

// 剩余参数 ...restOfNum:number[]
function add(x:number,y:number,...restOfNum:number[]):void{
    let resNum:number=x+y
    for (let argument of restOfNum) {
        resNum+=argument
    }
    console.log(resNum)
}
add(1,2,3,4,5,6,7,8,9,10)
