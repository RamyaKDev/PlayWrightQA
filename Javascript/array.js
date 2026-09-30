// Print indexes of [100, 200, 300].
let a=[100,200,300]
for(let i in a ){
    console.log(i)
     console.log(a[i])

}

//copy array
let a1=[...a]
console.log(a1)

//max
let a2=[23,12,45,22]
let max=0
let smax=0
for(let i=0;i<a2.length;i++){
if(a2[i]>max){
    smax=max
    max=a2[i]

}
else if(smax<max && a2[i]>smax){
smax=a2[i]
}
}

console.log(max)
console.log(smax)

//array reverse
let q=[2,4,1,3,5]
for(let q1=5;q1>=0;q1--){
    //console.log(q[q1])

}
 let w=[]
for(let i=0;i<q.length;i++){
    w[i]=q[i]*2
}
console.log(w)

let e=[1,2,-1,0]

for(let i=0;i<e.length;i++){
    if(e[i]>0)
       console.log(e[i])
    
}


//move zeros at the end
function movezeros(a){
let j=0
for(let i=0;i<a.length;i++){
    if(a[i]!==0){
        let temp=a[j]
        a[j]=a[i]
        a[i]=temp
        j++
    }

}
console.log(a)
}
let ar=[1,0,2,0,2]
movezeros(ar)

//anagram

 

function anagram(s1,s2){
if(s1.length!==s2.length)
    return false

    let w1=s1.split("").sort().join("")
    let w2=s2.split("").sort().join("") 
        return w1===w2
}
let s1="listen"
let s2="silent"
    console.log(anagram(s1,s2))

   