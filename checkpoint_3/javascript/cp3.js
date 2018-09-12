'use strict';
//*********** DOC READY REQUIRED F(X) *****************
$(document).ready(function() {
//   var data = {
//     totalAutoMade:360,
//     totalCurrent:0,
//
//   };
//   setInterval(goGo,1000);
//
//   function goGo() {
//   data.totalAutoMade+= data.totalRPS;
//   data.totalCurrent += data.totalRPS;
//   updateReport();
// }
//
// function updateReport() {
//   $("#pLs").text(Math.floor(data.totalCurrent));
// }
//
// $(".prodButton").click(function (){
//   data.totalAutoMade ++;
//   data.totalCurrent ++;
//   updateReport();
// })
//
// $(".button").click(function (){
//   var addVal = $(this).data( "cost" );
//   if ($(this).data( "cost" ) < data.totalCurrent ) {
//     data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
//     data.totalRPS += parseFloat($(this).data( "val" ));
//     $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
//     $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
//   }
//   updateReport();
// })



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
