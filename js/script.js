const pizza={
  pizzaPrice1:8, 
  pizzaPrice2:10, 
  pizzaPrice3:12,
  pizzaPriceSmall=-1,
  pizzaPriceMedium=0,
  pizzaPriceLarge=2,
};



const topping={
 avocadoTopping: 1,
 brocoliTopping: 1,
 onionTopping :1,
 zuchiniTopping : 1,
 lobsterTopping : 2,
 oysterTopping : 2,
 salmonTopping : 2,
 tunaTopping : 2,
 baconTopping : 3,
 duckTopping : 3,
 hamTopping : 3, 
 sosisTopping : 3,
}

let currentPrice = 0;
let pizzaPrice = 0;
let pizzaSizePrice = 0;
let toppingPrice = 0;
let pizzaSize = "";
let listPizzaTopping = [];
let pizzaSelection = "";

const pizzaSelections = document.querySelectorAll("[name=pizza]");
const pizzaSizes = document.querySelectorAll("input[name=size]");
const pizzaToppings = document.querySelectorAll("input[name=topping]");
const writePizzaPrice = document.querySelector("p>span#pizza-result");
const writePizzaSizePrice = document.querySelector("p>span#size-result");
const writePizzaToppingPrice = document.querySelector(
  "div>p>span#topping-result"
);
const writeTotalPrice = document.querySelector("p>span#total-result");
const resetButton = document.getElementById("reset-order");


for (let i = 0; i < pizzaSelections.length; i++) {
  pizzaSelections[i].addEventListener("click", getPizzaPrice);
}

function getPizzaPrice(ev) {
  currentPrice = 0;
  pizzaSelection = ev.target.value; 

  for (let i = 0; i < pizzaToppings.length; i++) {
    pizzaToppings[i].checked = false;

    if (pizzaToppings[i].checked == false) {
      let p = pizzaToppings[i].value;

      deleteTopping(p);
    }
  }

  listToppingToPrice(listPizzaTopping); // to make topping price zero
  availablePizzaTopping(pizzaSelection);

  pizzaSelection === "pizza-1-value" ? (pizzaPrice = pizza.pizzaPrice1) : "";
  pizzaSelection === "pizza-2-value" ? (pizzaPrice = pizza.pizzaPrice2) : "";
  pizzaSelection === "pizza-3-value" ? (pizzaPrice = pizza.pizzaPrice3) : "";

  currentPrice = pizzaPrice + toppingPrice + pizzaSizePrice;

  writePizzaToppingPrice.innerHTML = `${toppingPrice}`;
  writePizzaPrice.innerHTML = `${pizzaPrice}`;
  writeTotalPrice.innerHTML = `${currentPrice}`;

}

for (let i = 0; i < pizzaSizes.length; i++) {
  pizzaSizes[i].addEventListener("click", getPizzaSizePrice);
}

function getPizzaSizePrice() {
  currentPrice = pizzaPrice;
  pizzaSize = this.value; 

  pizzaSize === "small" ? (pizzaSizePrice = pizza.pizzaPriceSmall) : "";
  pizzaSize === "medium" ? (pizzaSizePrice = pizza.pizzaPriceMedium) : "";
  pizzaSize === "large" ? (pizzaSizePrice = pizza.pizzaPriceLarge) : "";

  currentPrice = pizzaPrice + toppingPrice + pizzaSizePrice;
  writePizzaSizePrice.innerHTML = `${pizzaSizePrice}`;
  writeTotalPrice.innerHTML = `${currentPrice}`;

}

for (const topping of pizzaToppings) {
  topping.addEventListener("click", getPizzaToppingPrice);
}

function getPizzaToppingPrice(ev) {
  currentPrice = pizzaPrice + pizzaSizePrice;
  let statusAddTopping = ev.target.checked;

  if (statusAddTopping == true) {
    let addTopping = ev.target.value;
    listPizzaTopping.push(addTopping);
  }

  if (statusAddTopping == false) {
    let delTopping = ev.target.value;
    deleteTopping(delTopping);
  }

  listToppingToPrice(listPizzaTopping);
  currentPrice = pizzaPrice + toppingPrice + pizzaSizePrice;
  writeTotalPrice.innerHTML = `${currentPrice}`;
  writePizzaToppingPrice.innerHTML = `${toppingPrice}`;
}


function deleteTopping(list) {
  for (let i = 0; i < listPizzaTopping.length; i++) {
    if (listPizzaTopping[i] == list) {
      listPizzaTopping.splice(i, 1);
    }
  }
}

function availablePizzaTopping(check) {
  pizzaToppings.forEach(Element => (Element.disabled = false));

  switch (check) {
    case "pizza-1-value":
      document.getElementById("topping-lobster").disabled = true;
      document.getElementById("topping-oyster").disabled = true;
      document.getElementById("topping-salmon").disabled = true;
      document.getElementById("topping-bacon").disabled = true;
      document.getElementById("topping-duck").disabled = true;
      document.getElementById("topping-sausage").disabled = true;
      break;

    case "pizza-2-value":
      document.getElementById("topping-avocado").disabled = true;
      document.getElementById("topping-tuna").disabled = true;
      document.getElementById("topping-duck").disabled = true;
      document.getElementById("topping-sausage").disabled = true;
      break;

    case "pizza-3-value":
      document.getElementById("topping-avocado").disabled = true;
      document.getElementById("topping-lobster").disabled = true;
      document.getElementById("topping-oyster").disabled = true;
      document.getElementById("topping-salmon").disabled = true;
      break;
  }
}

function listToppingToPrice(list) {
  toppingPrice = 0;

  for (let i of list) {
    switch (i) {
      case "avocado":
        toppingPrice += topping.avocadoTopping;
        break;
      case "broccoli":
        toppingPrice += topping.brocoliTopping;
        break;
      case "onions":
        toppingPrice += topping.onionTopping;
        break;
      case "zucchini":
        toppingPrice += topping.zuchiniTopping;
        break;
      case "lobster":
        toppingPrice += topping.lobsterTopping;
        break;
      case "oyster":
        toppingPrice += topping.oysterTopping;
        break;
      case "salmon":
        toppingPrice += topping.salmonTopping;
        break;
      case "tuna":
        toppingPrice += topping.tunaTopping;
        break;
      case "bacon":
        toppingPrice += topping.baconTopping;
        break;
      case "duck":
        toppingPrice += topping.duckTopping;
        break;
      case "ham":
        toppingPrice += topping.hamTopping;
        break;
      case "sausage":
        toppingPrice += topping.sosisTopping;
        break;
      case list.length == 0:
        toppingPrice = 0;
        break;
    }
  }
}

const reset = () => {
  location.reload();
};

resetButton.addEventListener("click", reset);