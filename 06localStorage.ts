let txtKeyObj:any=document.querySelector('#txtKey')
let txtValueObj:any=document.querySelector('#txtValue')
let btnAdd1:any=document.querySelector('#btnAdd')
let btnRead:any=document.querySelector('#btnGet')
let btnDel:any=document.querySelector('#btnRemove')
let btnClear:any=document.querySelector('#btnClear')

let btnAddObj:any=document.querySelector('#btnAddObj')
let btnGetObj:any=document.querySelector('#btnGetObj')

// 1.保存数据
btnAdd1.onclick=function (){
    let strkey=txtKeyObj.value
    let strValue=txtValueObj.value
    localStorage.setItem(strkey,strValue)
    console.log('保存成功了')
}
// 2.取数据
btnRead.onclick=function () {
    let strkey=txtKeyObj.value
    let strValue=localStorage.getItem(strkey)
    console.log('你取出的数据为：'+ strValue)
}
// 3.删除数据
btnDel.onclick=function (){
    let strkey=txtKeyObj.value
    localStorage.removeItem(strkey)
    console.log('您删除的数据为：'+strkey)
}
// 4.清空数据
btnClear.onclick=function () {
    localStorage.clear()
}
// 5.保存对象
btnAddObj.onclick=function () {
    let dog:object={
        name:'花花',
        age:2,
        gender:false
    }
    let strJson:string=JSON.stringify(dog)
    localStorage.setItem('myDog',strJson)
    console.log('保存对象成功啦！！！')
}
// 6.取对象
btnGetObj.onclick=function () {
    let strJson:string|null=localStorage.getItem('myDog')
    let obj:object=JSON.parse(strJson as string)
    console.log(obj)
}
