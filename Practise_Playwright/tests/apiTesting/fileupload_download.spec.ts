import {test,expect} from "@playwright/test";
import fs from "fs"
test.describe("file upload and download",()=>{
    let uploadFile="";
    test("file upload",async({request})=>{
       const response= await request.post( 'https://api.escuelajs.co/api/v1/files/upload',
            {
                multipart: {
                    file: {
                        name: 'Test2.txt',
                        mimeType: 'text/plain',
                        buffer: fs.readFileSync('./tests/uploads/Test2.txt')
                    }
                }
            }
        );

        expect(response.status()).toBe(201)
        expect(response.statusText()).toBe("Created")
       const responseBody =await response.json()
        uploadFile=responseBody.filename
        console.log("uploadFile",uploadFile)
    })
test("file download",async({request})=>{
      const response = await request.get(
            `https://api.escuelajs.co/api/v1/files/${uploadFile}`
        );

        expect(response.status()).toBe(200)
        expect(response.statusText()).toBe("OK")
       const newFile =await response.text()
        expect(newFile).toContain("TypeScript")
    })


})