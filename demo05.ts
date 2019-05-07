//函数声明方式
// function add(a1: number, a2: number) :number{
//     return a1+a2
// }
// console.log(add(1,4))

import {promises} from "fs";

var add2 =async  (n1:number, n2:number):Promise<number>=>{
   return new Promise<number>(((resolve, reject) => {
       setTimeout(()=>{
           console.log(n1+n2)
           resolve(n1+n2)
       },3000)
   }))
}


add2(1,4)
