function reverse(s){
    let rev=""
    for(let i=s.length-1;i>=0;i--){
        rev=rev+s[i]
    }
    console.log(rev)
}
let s="hello"
reverse(s)


//2. Palindrome
function palindrome(s1){
    let old=s1
    let rev=""
    for(let i=s1.length-1;i>=0;i--){
        rev=rev+s1[i]
    }
    if(old===rev)
        console.log("palindrome")
    else
       console.log("not palindrome") 
}
let s1="madamq"
palindrome(s1)

//3. diamond pattern
function diamond1(){
    let n=5
    for(let row=1;row<n;row++)
    {
        let rw=""
        for(let spaces=1;spaces<n-row;spaces++){
          rw=rw+" "
        }
        for(let star=0;star<row+(row-1);star++){
           rw=rw+"*"
        }
        console.log(rw)
    }
     for(let row=n-1;row>=1;row--)
    {
        let rw=""
        for(let spaces=1;spaces<n-row;spaces++){
          rw=rw+" "
        }
        for(let star=0;star<row+(row-1);star++){
           rw=rw+"*"
        }
        console.log(rw)
    }
}
diamond1();

//4.count 
let s2="i love india my"
let s3=s2.split(" ")
console.log(s3.length)

//5.Capitialize
let s4="hello"
let s5=s4.charAt(0).toUpperCase()
console.log(s5)
let s6=s4.slice(1,s4.length)
console.log(s6)
console.log(s5+s6)

//6.count occurences of a
let s7="pranavan"
let count=0;
for(let i=0;i<s7.length;i++){
if(s7.charAt(i)==='a')
    count+=1
}
console.log(count)

//6.count occurences of a
let s8="pranavan"

for(let i=0;i<s8.length;i++){
    let count1=0;
    for(let j=0;j<s8.length;j++){
if(s8.charAt(i)===s8.charAt(j))
    count1+=1
}
console.log(s8.charAt(i),count1)

}


//count longest word
let s10="I love my family now"
let sp=s10.split(" ")
let n=[]
let max=0
let e=""
for(let i=0;i<sp.length;i++){
    n=sp[i].length
    if(n>max){
        max=n 
        e= sp[i]     
    }

}

console.log(max, e)