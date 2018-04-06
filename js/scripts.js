//backend logic
function PizzaOrder(price, size, topping){ //constructor
  this.price = price;
  this.size = size;
  this.toppping = topping;
}

PizzaOrder.prototype.pizzaCalculation = function(){ //create a prototype method to calculate the price
  if (this.size === "Small") {
    debugger;
    this.price += 5;
  } else if (this.size === "Medium") {
    this.price += 7;
  } else if (this.size === "Large") {
    this.price += 10;
  } else if (this.size === "Extra Large") {
    this.price += 12;
    debugger;
    console.log(this.price);
  }

  if (this.topping === "Sausage" || this.topping === "Pepperoni") {
    this.price += 2;
  } else if (this.topping === "Mushrooms" || this.topping === "Green Peppers" || this.topping === "Olives") {
    this.price += .50; //need to convert the parseint to decimals?
  } else if (this.topping === "Extra Cheese") {
    this.price += 1;
    console.log(this.price);
  }
   return this.price;
   // console.log(this.price);
}

// var order = new PizzaOrder(0);
// var size = order.pizzaCalculation(4);
//
// alert(order);

function resetFields() {
  $("input").val("");
  $("option").val("");
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
      console.log(toppingChoiceArray);
    });
    $("#order-output").append("<li><span class='pizzaOrderName'>" + orderName + ", click here for your order details" + "</span></li>"); //listing name for order details

    var newPizzaOrder = new PizzaOrder(price, size, toppingChoiceArray); //instance that holds the values for each item

      var pizzaPriceEstimator = newPizzaOrder.pizzaCalculation();  //create a variable to run a method to calculate the price

      console.log(newPizzaOrder);
      console.log(pizzaPriceEstimator);
    $(".pizzaOrderName").last().click(function(){
      var orderInformation = `<img src='img/pizza.png'>
                              <p class='lead outputDisplay'> ${orderName}, here are your order details:</p>
                              <p class='lead outputDisplay'> Pizza Size: ${size}</p>
                              <p class='lead outputDisplay'> Pizza Topping: ${toppingChoiceArray}</p>
                              <p class='lead outputDisplay'> Price: $ ${pizzaPriceEstimator}</p>
                              <button type="button" id="reset" class="btn btn-outline-warning btn-lg btn-block btn-style font-label">New Order</button>`;
      $("#order-output").html(orderInformation);
    });

    // $(".pizzaOrderName").last().click(function(){
    //   // $(".orderName").append(orderName); //posting first name so user can click and see detials
    //   $(".order-name").text(orderName);
    //   $(".size-output").text(size);
    //   $(".topping-output").text(toppingChoiceArray);
    //   $(".totalPrice").text(newPizzaOrder);
    //   console.log(size.pizzaCalculation);
    // });
    resetFields();
  });
});
