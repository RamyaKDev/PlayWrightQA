import {test,expect} from "@playwright/test"
test("crud web table",async({page})=>{
//Open the CRUD Web Table page.
await page.goto("https://sdetqa.vercel.app/autoplay.html")
let tablelink=page.locator('a[href="#tables"]')
await tablelink.click()

//Verify the CRUD table is displayed.The table is visible with the headers #, Name, Role, Action.
const table=page.locator('#dynamicTable')
const heading=table.locator('thead th')
const headcontents=await heading.allTextContents()
console.log("Table heading",headcontents)

expect(headcontents).toEqual([ '#', 'Name', 'Role', 'Action' ])

//Verify the input fields and buttons.Name, Role, Add, + Dynamic, and Search fields are visible and enabled.
const name=page.getByPlaceholder('Name')
await expect(name).toBeVisible()
await expect(name).toBeEnabled()
const role=page.locator('#newRole')
await expect(role).toBeVisible()
await expect(role).toBeEnabled()
const search=page.getByPlaceholder('Search table...')
await expect(search).toBeVisible()
await expect(search).toBeEnabled()
const addButton=page.getByRole("button",{name:"Add"})
await expect(addButton).toBeVisible()
await expect(addButton).toBeEnabled()
const dynamicButton=page.getByRole("button",{name:"+ Dynamic"})
await expect(dynamicButton).toBeVisible()
await expect(dynamicButton).toBeEnabled()
            
//4. Verify the default table data.
//he table contains two records: Alice and Bob.

const rows=table.locator('tbody tr')
const rowcount=await rows.count()
const tableData:string[][]=[];
for(let i=0;i<rowcount;i++){
    const rowdata=rows.nth(i).locator('td')
   const rowtext=await rowdata.allInnerTexts()
   tableData.push(rowtext)
}
console.log(tableData)
expect(tableData).toEqual([[ '1', 'Alice', 'Engineer', 'Delete' ], ['2', 'Bob', 'Designer', 'Delete']])

//5. Enter Sam Tester as Name and QA Lead as Role. Click Add.A new row for Sam Tester with role QA Lead is added to the table.
await name.fill("Sam Tester")
await role.fill("QA Lead")
await addButton.click()

//6. Verify the total number of rows.The table now contains 3 rows.
expect(await rows.count()).toBe(3)

//7. Search for Alice in the search box.Only the Alice record is visible, and other rows are hidden.
await search.fill("Alice")
await expect(search).toHaveValue("Alice")

expect(rows.nth(0).locator('td')).toHaveText([ '1', 'Alice', 'Engineer', 'Delete' ])
await expect(rows.nth(1)).toBeHidden()
await expect(rows.nth(2)).toBeHidden()

//8. Clear the search box.All table rows become visible again.
await search.fill(" ")
await expect(rows.nth(0)).toBeVisible()
await expect(rows.nth(1)).toBeVisible()
await expect(rows.nth(2)).toBeVisible()

//9. Delete the Bob record by clicking Delete and accept the confirmation dialog.
//The Bob record is removed from the table and the total row count decreases to 2.
const bob=rows.nth(1).locator('td')
// const bobdata=await bob.allInnerTexts()
// console.log(bobdata)
// const bobDelete=bob.locator('button',{hasText:"Delete"})
// await bobDelete.click()
// expect(await rows.count()).toBe(2)
 page.once('dialog', dialog => dialog.accept()); //This will accept the confirmation dialog after clicking on 'Delete' button.

        await bob.locator('button', { hasText: 'Delete' }).click();
expect(await rows.count()).toBe(2)

//10. Click the + Dynamic button.
//A new dynamic record is added to the table with values such as New and Dev, confirming the button works successfully.
dynamicButton.click()
await expect(
            table.locator('tbody tr', { hasText: 'New' })
        ).toBeVisible();

        await expect(
            table.locator('tbody tr', { hasText: 'Dev' })
        ).toBeVisible();
expect(await rows.count()).toBe(3)
})