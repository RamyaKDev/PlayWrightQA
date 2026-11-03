import {test,expect} from "@playwright/test"
import fs from "fs"

// const requestPayload={
//     "firstname": "Sally",
//     "lastname": "Brown",
//     "totalprice": 111,
//     "depositpaid": true,
//     "bookingdates": {
//         "checkin": "2013-02-23",
//         "checkout": "2014-10-23"
//     },
//     "additionalneeds": "Breakfast"
// }

test("Post request using static",async({request})=>{
    const jsonPath="./tests/testdata/post_request.json"
const jsonFIle=JSON.parse(fs.readFileSync(jsonPath,"utf-8"))
   const response= await request.post("https://restful-booker.herokuapp.com/booking",{data:jsonFIle})
   const responseBody =await response.json()
   console.log(responseBody)

   expect(response.status()).toBe(200)
   expect(response.statusText()).toBe("OK")

   expect(responseBody.bookingid).toEqual(expect.any(Number))
  // expect(responseBody.booking).toMatchObject(requestPayload)
   expect(responseBody.booking).toHaveProperty("firstname")
})