//backend logic
function PizzaOrder(price = 0, size, topping){
  this.price = price;
  this.size = size;
  this.toppping = topping;
}



// frontend logic
debugger;
$(document).ready(function(){
  debugger;
  $("form#pizza-form").submit(function(e){
    e.preventDefault();


    var orderName = $("#order-name").val();
    debugger;
    var size = $("#size").val();

    var toppingChoiceArray = [];
    console.log(toppingChoiceArray);
    $("input:checkbox[name=topping]:checked").each(function(){
      var topping = $(this).val();
      console.log(topping);
      toppingChoiceArray.push(" " + topping);
      $('.topping-output').text(toppingChoiceArray);
      console.log(toppingChoiceArray);
    });





    $(".order-name").append(orderName);
    $(".size-output").append(size);
  });
});
