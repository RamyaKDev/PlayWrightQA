function fetchData(){
let mypromise = new Promise((resolve,reject)=>{
let success=false
if(success)
    resolve("Data fetched successfully")
else
    reject("Data not fetched ")
})
return mypromise
}
fetchData()
.then((msg)=>{
    console.log(msg)
})
.catch((error)=>{
 console.log(error)
})
.finally(()=>{
    console.log("release resources")
})


function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let user={name:"Ramya",age:35}
            resolve(user)
        },3000)
    })
}
fetchData()
.then((msg)=>{
    console.log(msg)
})
.catch((error)=>{
 console.log(error)
})
.finally(()=>{
    console.log("release resources")
})

let a=Promise.resolve("success1")
let b=Promise.resolve("success2")
Promise.all([a,b])
.then((msg)=>{
    console.log(msg)
})