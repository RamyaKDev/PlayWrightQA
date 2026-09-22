let numberToCheck = 987654;
let largestDigit = 0;
while (numberToCheck > 0) {
    let digit = numberToCheck % 10;
    if (digit > largestDigit) {
        largestDigit = digit;
    }
    numberToCheck = Math.floor(numberToCheck / 10);
}
console.log("Largest digit:", largestDigit);


let n=1237845

let l=0
while(n>=1){
    let r=n%10
    if(l<r)
        l=r
     n=Math.floor(n/10)
    

}
console.log("largest no", l)