function primeCheck(){
let n=37
let flag=true
if(n<=1)
     flag=false
else{
    for(let i=2;i<=n/2;i++){
        if(n%i===0){
            flag=false
            break
        }
    }
    if(flag)
        console.log("prime no")
    else
        console.log("not a prime no")

}
}
primeCheck()