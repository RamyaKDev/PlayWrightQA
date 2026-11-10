import {test,expect} from "@playwright/test"
import dotenv from "dotenv"
import buffer from "buffer"
dotenv.config();
test("No Auth",async({request})=>{
   const response= await request.get("https://jsonplaceholder.typicode.com/posts/1")
   const responseBody=await response.json()
   console.log("responsebody",responseBody)
   expect(response.status()).toBe(200)
   expect(responseBody).toHaveProperty("userId")
   expect(responseBody.id).toBe(1)
})


 //Basic auth
    //https://postman-echo.com/basic-auth
    //username:  postman
    // passowrd:  password
test('2. Basic Authentication', async ({ request }) => {

        const username = process.env.BASIC_AUTH_USERNAME;
        const password = process.env.BASIC_AUTH_PASSWORD;
 console.log(username,password)
        // this will convert data to encoded string format
        const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');
        console.log("Encoded string", base64Credentials)

        const response = await request.get('https://postman-echo.com/basic-auth', {
            headers: {
                Authorization: `Basic ${base64Credentials}`
            }
        });

        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log(responseBody)
        expect(responseBody.authenticated).toBe(true);

    });

     // Note: You'll need to sign up for a free API key at https://openweathermap.org/api
    //API URL:  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

    test('3. API Key Authentication (Open weather API)', async ({ request }) => {

        const apiKey = process.env.OPENWEATHER_API_KEY;
        const city = "Delhi"
console.log(apiKey);
        const response = await request.get(`https://api.openweathermap.org/data/2.5/weather`,
            {
                params: {
                    q: "Delhi",
                    appid: apiKey!,
                },
            }
        );

        //expect(response.status()).toBe(200);
        const weatherData = await response.json();
        console.log(weatherData);

        expect(weatherData.name).toBe(city);
        expect(weatherData).toHaveProperty('weather');
        expect(weatherData).toHaveProperty('main');
    });