//backend logic




// frontend logic
debugger;
$(document).ready(function(){
  debugger;
  $("#pizza-form").submit(function(e){
    e.preventDefault();


  var orderName = $("#order-name").val();
  debugger;
  var size = $("#size").val();

  $(".order-name").append(orderName);
  $(".size-output").append(size);
  });
});
