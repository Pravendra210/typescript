const chaiFlavours: string[]= ["Masala "," Adrak"]
const chaiPrice: number[]=[10,20]

const rating:Array<number>=[4,5.0]

type chai={
    name:string;
    price: number
}
const menu: Chai[]=[
    {name:"Masala", price:15},
    {name:"Adrak",price:25},
]

const cities:readonly string[]=["Delhi","Jaipur"]

let chaiTuple:[string,number];
chaiTuple=["Masala",20]
chaiTuple=[20,"Masala"]


let userInfo:[string,number,boolean?]
userInfo=["rohit",200]



enum CupSize{
    SMALL,
    MEDIUM,
    LARGE
}
const size=CupSize.LARGE


const enum Sugars{
    LOW=1,
    MEDIUM=2,
    HIGH=3
}

let t:[string,number]=["chai",10]
t.push("extra")