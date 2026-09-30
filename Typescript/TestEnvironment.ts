class TestEnvironment{
    envName:string
    browser:string
    baseUrl?:string
    constructor(envName:string)
    constructor(envName:string,browser?:string)
    constructor(envName:string,browser?:string,baseUrl?:string)
    constructor(envName:string,browser?:string,baseUrl?:string){
        this.envName=envName
        this.browser=browser || "chrome"
        this.baseUrl=baseUrl || "No Url Provided"
            
    }
    displayEnvDetaile(){
        console.log(`${this.envName} and ${this.browser} and ${this.baseUrl}`)
    }
}

let te:TestEnvironment=new TestEnvironment("UAT")
te.displayEnvDetaile()
let te1:TestEnvironment=new TestEnvironment("UAT","firefox")
te1.displayEnvDetaile()
let te2:TestEnvironment=new TestEnvironment("UAT","IE","www.google.com")
te2.displayEnvDetaile()
