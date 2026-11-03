import {test,expect} from "@playwright/test"

test("get request using path",async({request})=>{
const id=1
const BASE_URL="https://restful-booker.herokuapp.com/booking"
   const response= await request.get(`${BASE_URL}/${id}`)
   const responseBody =await response.json()
   console.log(responseBody)

   expect(response.status()).toBe(200)
   expect(response.statusText()).toBe("OK")

 
})
test("get ids request using path",async({request})=>{
const id=1
const BASE_URL="https://restful-booker.herokuapp.com/booking"
   const response= await request.get(`${BASE_URL}`)
   const responseBody =await response.json()
   console.log(responseBody)

   expect(response.status()).toBe(200)
   expect(response.statusText()).toBe("OK")

 for(let item of responseBody){
    expect(typeof item.bookingid).toBe("number")
    expect(item.bookingid).toBeGreaterThan(0)
 }
})

test("get query params request using path",async({request})=>{
 //https://restful-booker.herokuapp.com/booking?firstname=Jim&lastname=Brown
const BASE_URL="https://restful-booker.herokuapp.com/booking"
    const firstname="Jim"
    const lastname="Brown"

    const response = await request.get(`${BASE_URL}/booking`,
        {
            params:
            {
                firstname,
                lastname
            }
        }) 
    

    
    const responseBody = await response.json()
    console.log(responseBody)

   expect(response.status()).toBe(200)
   expect(response.statusText()).toBe("OK")

 for(let item of responseBody){
    expect(typeof item.bookingid).toBe("number")
    expect(item.bookingid).toBeGreaterThan(0)
 }
})

