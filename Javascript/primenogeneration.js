for(let i=2;i<100;i++){
    let prime=true
    
    for(let j=2;j<i;j++){
        if(i%j===0)
            prime=false
            break;

    }
    if(prime) 
        console.log(i)
}


//sum of even nos
let sum=0
for(let i=1;i<10;i++){
    
    if(i%2==0){
        sum=sum+i
    }
   
}
 console.log(sum)

 //Divisible by 3 and 5
 for(let i=1;i<20;i++){
    if(i%3==0 && i%5==0){
        console.log(i)
    }

 }

 // 14. Count digits
let numCD = 12345;
let count = 0;
for (let n = numCD; n > 0; n = Math.floor(n / 10)) {
    count++;
}
console.log(count);

let n=12345
let coun=0
let r=0
while(n>0){
    r=r+(n%10)

n=Math.floor(n/10)
count=coun+1
}
console.log(coun)
console.log(r)