function makeChai(type:string, cups:number){
    console.log(`making ${cups} cups of ${type} `);
}

makeChai("Masala",2)

function getChaiPrice():number{
    return 25
}

function makeOrder(order:string){
    if(!order) return null
    return order
}

function orderChai(type?:string){

}

function createChai(order:{
    type:string;
    sugar:number;
    size:"small"|"large"
}):number{
    return 4
}