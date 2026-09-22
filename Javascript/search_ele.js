function search(a,e){
     let flag=false
for(let i=0;i<a.length;i++){
   
   if(a[i]===e){
    console.log("element found")
    flag=true
    break
   }
  
}
if(flag===false)
    
    console.log("element not found")

}

let arr=[29,34,12,23]
let ele=29

search(arr,ele)