/*let arr=[100,200,300];
let dis = arr.map(function(price)
    {
        price-=price/10;
        return price;
    })
console.log(dis);*/
let arr=[1200,54,67,120,677,890,900];
var arr1=[]
let mod_ten=arr.filter(function(num){
    if(num%10==0){
        arr1.push(num);
    }
    return arr1;
})