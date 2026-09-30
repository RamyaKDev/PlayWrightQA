abstract class A1{
    isActive:boolean=false
    n:number
    constructor(n:number){
        this.n=n
    }
    abstract display():void
    print(){
        console.log("hello",this.n)
    }
}
class A2 extends A1{
    s:string
constructor(n:number,s:string){
    super(n)
    this.s=s
}
override display():void{
    if(this.isActive){
    this.print()
    }
    else
    console.log(this.s)
}
}
let a:A2=new A2(5,"No msg")
a.display()
