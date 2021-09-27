var buttons = document.getElementsByClassName("like"); //like
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];

  button.addEventListener("click", function () {
    if (button.style.color === "red") {
      button.style.color = "black";
    } else {
      button.style.color = "red";
    }
  });
}

//plusss button

var pluss = document.getElementsByClassName("plus-btn");

for (let i = 0; i < pluss.length; i++) {
  let plus = pluss[i];

  plus.addEventListener("click", function () {
    plus.previousElementSibling.value++;
    totalPrice();
  });
}

//minus button

var minuss = document.getElementsByClassName("minus-btn");

for (let i = 0; i < minuss.length; i++) {
  let minus = minuss[i];

  minus.addEventListener("click", function () {
    if (minus.nextElementSibling.value >= 2) {
      minus.nextElementSibling.value--;
      totalPrice();
    }
  });
}

// Deletes

var deletes = document.getElementsByClassName("delete");
for (let i = 0; i < deletes.length; i++) {
  let del = deletes[i];

  del.addEventListener("click", function () {
    del.parentElement.remove();
    totalPrice();
  });
}

//total price

function totalPrice() {
  var Items = document.getElementsByClassName("Item");
  var totalPrice = document.getElementById("finalPrice");
  console.log(Items);
  let total = 0;

  for (let i = 0; i < Items.length; i++) {
    let item = Items[i];
    let price =
      item.querySelector(".Quant").value *
      item.querySelector(".price").innerHTML;

    console.log(price);
    total = total + price;
    console.log(total);
  }

  totalPrice.value = total;
}