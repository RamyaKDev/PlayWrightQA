function display(num:number):string
function display(num:string):string
function display(num:boolean):string

function display(num:(number | string | boolean)):string{
    if(typeof(num)==="number")
       return `Print ${num}`
    else if(typeof(num)==="string")
       return `Print ${num}`
    else if(typeof(num)==="boolean")
        return `Print ${num}`
    else
        return `Not a given format`
}

console.log(display(5))
console.log(display("5"))
console.log(display(true))
console.log(display())


function call(n:number):number
function call(n:number,s:string):string

function call(n:number,s?:string):(number | string){
    if(s)
        return `${s} and ${n}`
    else
        return n
}

console.log(call(51))
console.log(call(12,"hello"))

function call1(n:number):number
function call1(n:number):string

function call1(n:number):(number | string){
    if(n>0)
        return n
    else
        return `hello ${n}`
}
console.log(call1(51))
console.log(call1(5))