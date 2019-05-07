// function searchXiaoJieJie(age: string) :string{
//     return `找${age}岁的小姐姐`
// }
//
// var ages:string='18'
// var result:string=searchXiaoJieJie(ages)
// console.log(result)

// function searchXiaoJieJie2(age: string,stature:string="一般") :string{
//     return `找${age}岁的小姐姐,身材${stature}`
// }
//
// var ages:string='18'
// var stature:string='很好'
// var result:string=searchXiaoJieJie2(ages,stature)
// console.log(result)
function searchXiaoJieJie2(...requires:string[]) :string{
    return `找${requires.join(',')}的小姐姐`
}

var ages:string='18'
var stature:string='很好'
var result:string=searchXiaoJieJie2(ages,stature)
console.log(result)
