let subs:number|string ='1M'

let apiRequstStatus:'pending' | 'success'| 'error'='pending'

const orders=["12","23","45","28"];

let currentorder:string|undefined;

for(let order of orders){
    if(order==="28"){
        currentorder=order;
        break;

    }
    currentorder="11";

}
console.log(currentorder);