let age=2

if(age>=18)
    console.log("Adult")
else
    console.log("Minor")


//multiple chain if else if
let mark=45
if(mark>=90)
     console.log("Grade A")
else if(mark>=80 && mark<=90)
     console.log("Grade B")
    else if(mark>=70 && mark<=80)
     console.log("Grade C")
    else if(mark>=60 && mark<=70)
     console.log("Grade D")
    else
        console.log("Grade E")


    let uname="Ramya"
    let pwd="std1"
    let isLocked=true
    if(uname==="Ramya" && pwd==="std")
    {
        if(!isLocked)
            console.log("User is entered")
        else{
        console.log("User is not entered")
    }
    }
     else{
        console.log("User is not valid")
     }
    