//backend logic
function PizzaOrder(price = 0, size, topping){ //constructor
  this.price = price;
  this.size = size;
  this.toppping = topping;
}

PizzaOrder.prototype.pizzaCalculation = function(){ //prototype method
  if (this.size === "Small") {
  this.price += 5;
  } else if (this.size === "Medium") {
    this.price += 7;
  } else if (this.size === "Large") {
    this.price += 10;
  } else if (this.size === "Extra Large") {
    this.price += 12;
  }

  if (this.topping === "Sausage" || this.topping === "Pepperoni") {
    this.price += 2;
  } else if (this.topping === "Mushrooms" || this.topping === "Green Peppers" || this.topping === "Olives") {
    this.price += .50; //need to convert the parseint to decimals?
  } else if (this.topping === "Extra Cheese") {
    this.price += 1;
  }
   return this.price;
   // console.log(this.price);
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
