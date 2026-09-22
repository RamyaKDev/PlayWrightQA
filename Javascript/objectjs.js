let person={
    firstName:"John",
    lastName:"Smith",
    age:32,
    // fullName:function(){
    //     return this.firstName+" "+this.lastName
    // }
    mycars:
    {
        car1:"Hyundai"
    }
}
console.log(person.mycars.car1)
//console.log(person)
for(let k in person){
    console.log(k+" "+person[k])
}
person.city="Hyderabad"
person.firstName="Khan"
console.log(person)
delete(person.age)
console.log(person)

let person={
    firstName:"John",
    lastName:"Smith",
    age:32,
    
}
//console.log(Object.entries(person))
for(let [key,value] of Object.entries(person)){
    console.log(key+" "+value)
}