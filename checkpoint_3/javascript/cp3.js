'use strict';
//*********** DOC READY REQUIRED F(X) *****************
$(document).ready(function() {

  //********* MAKE CARS_Increment Cars REDUCE BANK~DECREMENT**********
  //********* SELL CARS_Decrement Cars INCREASE BANK~INCREMENT **********
let numProd = 0;
let numSold = 0;

$('.prodButton').click(function carMade() {
  numProd += 1;
  console.log(numProd);
  $('#pLs').text(`Cars Produced = ${numProd}`)
  inventoryCall();
})

$('.sellButton').click(function carSold() {
  numSold+= 1;
  console.log(numSold);
  $('#cSl').text(`Cars Sold = ${numSold}`)
  inventoryCall();
})

function inventoryCall(){
  let inventory = numProd - numSold;
    $('#inventory').text(`Inventory = ${numProd} - ${numSold} = ${inventory}`);
}



  //********* CREATE BANK and STATS TOTALS**********

  // ********* FOOTER ****************
  var date = new Date().getFullYear();
  document.getElementById("copyright").innerHTML = date;
});
