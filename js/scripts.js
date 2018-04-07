//backend logic
function PizzaOrder(price =0, size, topping){ //constructor
  this.price = price;
  this.size = size;
  this.topping = topping;
}

PizzaOrder.prototype.pizzaCalculation = function(){ //create a prototype method to calculate the price
  debugger;
  if (this.size === "Small") {
    debugger;
    this.price += 5;
  } else if (this.size === "Medium") {
    this.price += 7;
  } else if (this.size === "Large") {
    this.price += 10;
  } else if (this.size === "Extra Large") {
    this.price += 12;
    console.log(this.price);
  }
  return this.price;
  console.log(this.price);
}

function resetFields() {
  $("#order-name").val("");
  $("#size").val("");
  $('input[type=checkbox]').prop('checked', false);
}

// frontend logic
$(document).ready(function(){
  $("form#pizza-form").submit(function(e){
    e.preventDefault();

    var orderName = $("#order-name").val();
    var price = 0;
    var size = $("#size").val();
    var toppingChoiceArray = [];

    $("input:checkbox[name=topping]:checked").each(function(){  //getting each selected topping
      var topping = $(this).val();
      toppingChoiceArray.push(" " + topping); //pushing selected toppings to the topping array
      $('.topping-output').text(toppingChoiceArray);
      for (var i=0; i<=toppingChoiceArray.length;i++) { //looping through array to find which topping items were selected
        if (toppingChoiceArray === " Sausage" || toppingChoiceArray === " Pepperoni") {
          var newPrice = price += 2;
        } else if (toppingChoiceArray === " Mushrooms" || toppingChoiceArray === " Green Peppers" || toppingChoiceArray === " Olives") {
          var newPrice = price += 1; //need to convert the parseint to decimals?
        } else if (toppingChoiceArray === " Extra Cheese") {
          var newPrice = price += 1;
          console.log(newPrice);
          console.log(toppingChoiceArray);
        }
      }

    });
    $("#order-output").append("<li><span class='pizzaOrderName'>" + orderName + ", click here for your order details" + "</span></li>"); //listing name for order details

    var newPizzaOrder = new PizzaOrder(price, size, toppingChoiceArray); //instance that holds the values for each item

    var pizzaPriceEstimator = newPizzaOrder.pizzaCalculation();  //create a variable to run a method to calculate the price

    console.log(newPizzaOrder);
    console.log(pizzaPriceEstimator);
    $(".pizzaOrderName").last().click(function(){
      var orderInformation = `<h2>Order Details:</h2>
                              <img src='img/pizza.png'>
                              <p class='lead outputDisplay'> ${orderName}, here are your order details:</p>
                              <p class='lead outputDisplay'> Pizza Size: ${size}</p>
                              <p class='lead outputDisplay'> Pizza Topping: ${toppingChoiceArray}</p>
                              <p class='lead outputDisplay'> Price: $ ${pizzaPriceEstimator}</p>`;

      $(".show-order").html(orderInformation);
    });
    resetFields();
  });
  $("#reset").click(function(){

  });
});
