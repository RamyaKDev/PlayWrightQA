import {test,expect} from "@playwright/test"
const requestPayload={
    "firstname": "Sally",
    "lastname": "Brown",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2013-02-23",
        "checkout": "2014-10-23"
    },
    "additionalneeds": "Breakfast"
}

test("Post request using static",async({request})=>{

   const response= await request.post("https://restful-booker.herokuapp.com/booking",{data:requestPayload})
   const responseBody =await response.json()
   console.log(responseBody)

   expect(response.status()).toBe(200)
   expect(response.statusText()).toBe("OK")

   expect(responseBody.bookingid).toEqual(expect.any(Number))
   expect(responseBody.booking).toMatchObject(requestPayload)
   expect(responseBody.booking).toHaveProperty("firstname")
})