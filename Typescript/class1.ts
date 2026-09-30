class Student{
    readonly name:string
    age?:number
    grade:string
    static school:string="ABC School"

    constructor(name:string,age:number,grade:string){
        this.name=name
        this.age=age
        this.grade=grade
    }
    display():void{
        console.log(`${this.name} and ${this.age} and ${this.grade} and ${Student.school}`)
    }

    static schooldisplay(s:string){
       Student.school=s
    }
}

let s1=new Student("Ram",22,"g1")
s1.display()

Student.schooldisplay("XYZ")
console.log(Student.school)
let s2=new Student("Sam",2,"g2")
s2.display()