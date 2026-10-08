import { test,expect } from "@playwright/test";
test.describe("Dynamic Table",()=>{
    test.beforeEach(async({page})=>{
       await page.goto("https://sdetqa.vercel.app/autoplay.html")
        const logo=page.getByText("AutoPlay",{exact:true})
        await expect(logo).toBeVisible()
        await expect(page).toHaveURL("https://sdetqa.vercel.app/autoplay")
    })
    test("Chrome CPU Load Validation",async({page})=>{
       const table= page.locator('#taskTable')
       await expect(table).toBeVisible()

     const rows= await table.locator('tbody tr').all()
    expect(rows.length).toBeGreaterThan(0)
        let cpuLoad;
    //Verify each row has process name column.
        for(const row of rows){
           const processName= await row.locator('td').nth(0).allInnerTexts()
           expect(processName.length).toBeGreaterThan(0)
          const name= processName.toString()
           console.log("processName",name)
           //Identify the row where process name = Chrome
           let v:string="Chrome"
           if(name==="Chrome"){
            //Extract CPU load value (should contain %).
           cpuLoad=  await row.locator('td',{hasText:'%'}).innerText()
            console.log("cpuLoad of ",cpuLoad)
            expect(cpuLoad).toContain('%')

            //Verify CPU load value is not empty.
            expect(cpuLoad).not.toBe('')
           }
           }
            //Verify yellow label (strong.chrome-cpu) is visible.
           const chromeCpu= await page.locator('strong.chrome-cpu').innerText()
           
           //Verify yellow label value matches the extracted CPU load.
           expect(chromeCpu).toBe(cpuLoad)

           //Verify only one Chrome row exists (or handle multiple correctly).
          // expect(processName.includes("Chrome")).toHaveLength(1)
           
        

    })
//Test Case 2: Firefox Memory Usage Validation
    test("Test Case 2: Firefox Memory Usage Validation",async({page})=>{
        const table=page.locator('#taskTable')
       const rows= table.locator('tbody tr')
      const trows=await rows.all()
      expect(trows.length).toBeGreaterThan(0)

      for(const trow of trows){
        const processName=await trow.locator('td').nth(0).innerText()
       if( processName==='Firefox'){
        const memoryValue=await trow.locator('td',{hasText:'MD'}).innerText()
        expect(memoryValue).not.toBe('')
        console.log("Extracted from table",memoryValue)
        const label=page.locator('strong.firefox-memory')
         console.log("Extracted from Label",label)
         expect(memoryValue).toBe(label)

          expect(processName).toStrictEqual("Firefox")
            expect("Firefox").not.toBe('firefox')
       }
      }
})
      //Test Case 3: : Chrome Network Speed Validation
      test("Test Case 3: : Chrome Network Speed Validation",async({page})=>{
        const table= page.locator('#taskTable')
       await expect(table).toBeVisible()

     const rows= await table.locator('tbody tr').all()
    expect(rows.length).toBeGreaterThan(0)
       let speed;
    //Verify each row has process name column.
        for(const row of rows){
           const processName=  row.locator('td').nth(0)
            const name= await processName.innerText()
           expect(name.length).toBeGreaterThan(0)
          
           console.log("processName",name)
           //Identify the row where process name = Chrome
           
           if(name==="Chrome"){
           speed= await row.locator('td',{hasText:'Mbps'}).innerText()
           console.log("speed",speed)
            const networkSpeed= page.locator('strong.chrome-network')
      await expect(networkSpeed).toBeVisible()
       expect(networkSpeed).toContainText(speed)
           break
           }
        }
        expect(speed).not.toBe('')
      
      
    })

})