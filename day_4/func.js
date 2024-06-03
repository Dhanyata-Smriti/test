/*function Apply_Discount(cart,discount)
{
    var cart ;
    cart -= discount ;
    return cart;
}
var amt=1000;
var dis=200;
var a=Apply_Discount(amt,dis);
console.log("The final Amount:",a);*/
var Apply_Discount = function(cart,discount)
{
  var cart;
  cart-=discount;
  return cart
}
console.log(Apply_Discount(1000,200));