class Employee{
    private name:string
    private age:number

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    public getName():string{
        return this.name
    }
    public getAge():number{
       return this.age
    }
    public setName(name:string):void{
        this.name=name
    }
     public setAge(age:number):void{
        this.age=age
    }
}
let emp:Employee=new Employee("Ram",23)
console.log(emp.getAge())
console.log(emp.getName())

let emp1:Employee=new Employee("Sam",13)
emp1.setAge(30)
console.log(emp1.getAge())
console.log(emp1.getName())
