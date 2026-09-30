//push
let a=[1,2,3]
a.push(4)
console.log(a)

//pop
console.log(a.pop())

let a1=[2,4,6]
a1.forEach((n)=>{
console.log(n)
})

let a2=a1.map((n)=>n*n)
console.log(a2)

let a3=a1.filter((n)=>n>5)
console.log(a3)

let a5=[1,2,3,4,5]
let result=a5.reduce((n,sum)=>{
    return sum=sum+n
},0)
console.log(result)

let p=[1,2,3,4,2]
let res=[]
let j=0;
for(let i=0;i<p.length;i++){
    if(!res.includes(p[i]))
    {
        res[i]=p[i]
        
    }
    j++;
}
console.log(res)

let words=["hihihihihihi","hello","bye","grapes"]
let max=0
let index
for(let i=0;i<words.length;i++){
if(words[i].length>max){
max=words[i].length
index=i
}
}
console.log(words[index])

//reverse words
let s="hello world"
let re=s.split("").reverse().join("")
console.log(re)




//count occurences
let x="hello world"
let count={}
for(let char of x){
    console.log(count[char])
    count[char]=(count[char] || 0)+1
   
}
 console.log(count)