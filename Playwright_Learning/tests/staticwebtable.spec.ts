import {test,expect} from "@playwright/test"
test("Static web table",async({page})=>{
await page.goto("https://sdetqa.vercel.app/autoplay.html")

//count no of rows in the table
const table=page.locator('table').first()
const header=table.locator('thead th')
const rows=table.locator('tbody tr')

const headcount=await header.count()
const rowscount=await rows.count()
console.log("header count",headcount)
console.log("rows count",rowscount)

expect(headcount).toBe(5)
expect(rowscount).toBe(4)

//2.Read all data from 2nd row (index 2 → 3rd row including header
const secondrow=rows.nth(2).locator('td')
const secondvalues=await secondrow.allInnerTexts()
console.log("second row",secondvalues)
 expect(secondvalues).toEqual(['Keyboard', 'Electronics', '$79', '0', 'Out of Stock'])

//Read all data from the table (excluding header)
let tableData:string [][]=[];
for(let i=0;i<rowscount;i++){
tableData.push(await rows.nth(i).locator('td').allInnerTexts())
}
console.log(tableData)

//Print all product names → Expected: Laptop, Mouse, Keyboard, Monitor
let productNames=[];
for(let i=0;i<tableData.length;i++){
productNames.push(tableData[i][0])
}
console.log("productNames",productNames)
expect(productNames).toEqual(['Laptop', 'Mouse', 'Keyboard','Monitor'])

//Print products where Stock = 0 → Expected: Keyboard
let outOfStock=[]
for(let i=0;i<tableData.length;i++){
if(tableData[i][3]==='0'){
outOfStock.push(tableData[i][0])
}
}
console.log("outOfStock",outOfStock)
expect(outOfStock).toEqual(["Keyboard"])

//Print products where Status = "In Stock" → Expected: Laptop, Mouse, Monitor
let inStock=[]
for(let i=0;i<tableData.length;i++){
if(tableData[i][4]==='In Stock'){
inStock.push(tableData[i][0])
}
}
console.log("inStock",inStock)
expect(inStock).toEqual(['Laptop', 'Mouse','Monitor'])


//Count number of products "In Stock" → Expected: 3
console.log("(inStock length",inStock.length)
expect(inStock.length).toBe(3)

//Count number of products "Out of Stock" → Expected: 1
console.log("(outOfStock length",outOfStock.length)
expect(outOfStock.length).toBe(1)

//Get price of a specific product (e.g., Mouse)
let mouse;
if(tableData[1][0]==="Mouse"){
   mouse= tableData[1][2]
}
console.log(mouse)
expect(mouse).toEqual("$29")

//Data Processing Validations
//11.Calculate total price of all products
let totalprice=0
for(let i=0;i<tableData.length;i++){
totalprice=totalprice+Number(tableData[i][2].replace('$',''))
}
console.log("totalprice",totalprice)

expect(totalprice).toBe(1456)

//Find product with highest price → Expected: Laptop ($999)
let max=0;
let productmax='';
let min= Number(tableData[0][2].replace('$',''))
let productmin='';
for(let i=0;i<tableData.length;i++){
   let p= Number(tableData[i][2].replace('$',''))
    if( p >max){
        max=p
        productmax=tableData[i][0]
    }
     if(p<min){
        min=p
        productmin=tableData[i][0]
    }
}
console.log(`Highest Price $${max} and product is ${productmax}`)
console.log(`Lowest Price $${min} and product is ${productmin}`)

expect(max).toBe(999)
expect(min).toBe(29)

//Print products with price greater than $100 → Expected: Laptop, Monitor
let c=100
let carray=[]
for(let i=0;i<tableData.length;i++){
   let p= Number(tableData[i][2].replace('$',''))
    if( p >c){
        carray.push(tableData[i][0])
        
    }
}
console.log("more than 100 is", carray)
expect(carray).toEqual(['Laptop', 'Monitor'])

await page.close()
})