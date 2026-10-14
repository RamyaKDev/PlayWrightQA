import {test,expect} from "@playwright/test"
test("Single File",async({page})=>{
 await page.goto("https://sdetqa.vercel.app/autoplay")
  const singlefile=page.locator('input#singleFileInput')
  const uploadButton=page.locator('button',{hasText:"Upload Single File"})
  const textVerify=page.locator('p#singleFileStatus')
   await singlefile.setInputFiles("tests/uploads/Test1.txt")
    await uploadButton.click()
    expect(textVerify).toContainText(/Single file selected/)

})

test("Multiple Files",async({page})=>{
 await page.goto("https://sdetqa.vercel.app/autoplay")
  const singlefile=page.locator('input#multipleFilesInput')
  const uploadButton=page.locator('button',{hasText:" Upload Multiple Files"})
  const textVerify=page.locator('p#multipleFilesStatus')
   await singlefile.setInputFiles(["tests/uploads/Test1.txt","tests/uploads/sample1.pdf"])
    await uploadButton.click()
    expect(textVerify).toContainText(/Multiple files selected:/)

})