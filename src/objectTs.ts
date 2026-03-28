const chai ={
    name:"masala chai",
    price:20,
    isHot:true
}

let tea:{
    name:string;
    price:number;
    isHot:boolean
}

tea={
    name:"ginger tea",
    price:35,
    isHot:true

}

type ChaiOrder={
    name?:string;
    quantity?:number
}
const placeOrder=(order: Required<ChaiOrder>)=>{
    console.log(order);
}
placeOrder({
    name:"masals Chai",
    quantity:2
})