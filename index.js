 var cart = [];
function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
//---------------------------------------------------------------------
function addToCart(item) {
 // write your code here
 
 const itemObject = new Object({});
itemObject.itemName=item;
itemObject.itemPrice = Math.floor(Math.random()*100-1);
cart.push(itemObject);
 return `${itemObject.itemName} has been added to your cart.`;
}
//-------------------------------------------------------------------------
function viewCart() {
  
  var newArray = [];
  // write your code here
  if(cart.length===0){
    return "Your shopping cart is empty.";
  }
  if(cart.length===1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
    var i = 0 ;
do{

  newArray[i]=` ${cart[i].itemName} at $${cart[i].itemPrice}`;
 
  if(i===cart.length-1){
 newArray[i] =` and ${cart[i].itemName} at $${cart[i].itemPrice}`;
  }
  i++;
} while(i<cart.length);
 return `In your cart, you have${newArray}.`;
}
//-------------------------------------------------------------------------
function total() {
  // write your code
  var totalPrice = 0;
  for(var i=0;i<cart.length;i++){
    
  totalPrice = totalPrice + cart[i].itemPrice;
  }
  return totalPrice; 
}
//-------------------------------------------------------------------------
function removeFromCart(item) {
  // write your code here
  
  //for(var i = 0;i<cart.length;i++){
  
    //  return `That item is not in your cart`;
      delete cart[1].itemName;
      delete cart[1].itemPrice;
    return cart;
  }

//-------------------------------------------------------------------------
function placeOrder(cardNumber) {
  // write your code here
}
