class PersonS{
    name:String;
    age:number;

    constructor(name: String, age: number) {
        this.name = name;
        this.age = age;
    }
    public sayHello(){
        console.log(`${this.name}好`)
    }
}
// let person:PersonS=new PersonS('1',2)
// console.log(person)
// person.sayHello()

class Zhang extends PersonS{
    color:String;

    constructor(name: String, age: number, color: String) {
        super(name, age);
        this.color = color;
    }
    xihuan(){
        super.sayHello()
        console.log(123)
    }
}
let zhangxiangyu =new Zhang('zhangxiangyu',26,'red')
zhangxiangyu.xihuan()
