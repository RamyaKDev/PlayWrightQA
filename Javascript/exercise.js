let cr="f"
if(cr==="F")
    console.log("Uppercase")
else
console.log("lowerrcase")


let char="F"
if(char>="A" && char<="Z")
     console.log("Uppercase")
else
console.log("lowercase")

let num=22
if(num%10==0)
     console.log("multiple of 10")
    else
console.log("not multiple of 10")


    let c="P"
    if("aeiouAEIOU".includes(c))
        console.log("vowel")
    else
        console.log("consonant")

let m=2
    switch(m){
        case 1:
        case 2:
        case 12:
             console.log("winter")
            break;

        case 3 :
        case 4 :
            case 5:
             console.log("springr")
            break;
        default:
             console.log("not a valid number month")
    }


    let n="opera1"
    switch(n){
        case "opera"|| "chrome":
        
             console.log("chromium")
            break;

        
        default:
             console.log("not a browser")
    }