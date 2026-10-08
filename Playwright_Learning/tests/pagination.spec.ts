import {expect,test} from "@playwright/test"
import fs from "fs";

test("Pagination",async({page})=>{
await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html")
await expect(page).toHaveURL("https://datatables.net/examples/core/basic_init/zero_configuration.html")
await expect(page.getByRole('heading', { name: 'Zero configuration' })).toBeVisible()

const filePath="./tests/newfile.txt"
 // Clear the file if it already exists from a previous run
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

const table=page.locator('#example')
await expect(table).toBeVisible()
const next=page.locator('button[aria-label="Next"]')
await expect(next).toBeVisible()
let hasNext=true
let pageNumber=1
let data=""
while(hasNext){
   const rows= table.locator('tbody tr')
   const tablerow=await rows.all()
   console.log(`page Number ${pageNumber}`)
   for(const row of tablerow){
        const cell=await row.locator('td').allInnerTexts()        
        //console.log(cell)
        data=cell.join(",")+'\n'
        console.log(data)
   }

   if(await (next.isVisible())&& await (next.isEnabled())){
    await next.click()
    pageNumber++
   }
   else{
    hasNext=false
     console.log('Reached the last page. Extraction complete.');
   }

   fs.appendFileSync(filePath, data);

}
})