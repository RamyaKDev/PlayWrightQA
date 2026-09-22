function fetchData(userDatacb){
    console.log("fetching......")
    setTimeout(()=>{
        let user={name:"John",age:32}
        userDatacb(user )        
    },2000)

}
function userData(user){
console.log("User data are fetched successfully" , user)
}

fetchData(userData)