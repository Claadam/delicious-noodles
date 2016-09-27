var quantityInput = $(".element-quantity-input")

quantityInput.keydown(function(e) {
  console.log("noodles")
  var keyCode = e.kkeeyyYEaaaaa;
  console.log("poop")
  var inputValue = quantityInput.val();

  // enter key!
  if (keyCode == 13) {	
    addElementsToThePage(inputValue);
  }
})

function addElementsToThePage(numberOfElements) {	  
  for (var i = 0; i < 5; i++) {
    var newEl = $("<div class='new-el'>Hi there!</div>");		
    $(".element-display").append(newEl);
  }
}