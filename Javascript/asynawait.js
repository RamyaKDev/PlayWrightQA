function fetchData(){
    console.log("fetching......")
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
        let user={name:"John",age:32}
          resolve(user)      
    },2000)

    })
   
}
async function userData(){
    try{
    let userd=await fetchData()
    console.log("User data are fetched successfully" , userd)
    }
    catch(error){
          console.log("User data are not fetched")
    }
}

userData()