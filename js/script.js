/**
 * !! There is too much identic variable below, can be
 * !! collected into just one object.
 */
const pizzaPrice1 = 8;
const pizzaPrice2 = 10;
const pizzaPrice3 = 12;
const pizzaPriceSmall = -1;
const pizzaPriceMedium = 0;
const pizzaPriceLarge = 2;

/**
 * !! There is too much identic variable below, can be
 * !! collected into just one object.
 */
const avocadoTopping = 1;
const brocoliTopping = 1;
const onionTopping = 1;
const zuchiniTopping = 1;
const lobsterTopping = 2;
const oysterTopping = 2;
const salmonTopping = 2;
const tunaTopping = 2;
const baconTopping = 3;
const duckTopping = 3;
const hamTopping = 3;
const sosisTopping = 3;

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

/**
 * !! This function shouldn't be placed here.
 */
const reset = () => {
  location.reload();
};

/**
 * !! Please remove this unnecessary code below. We should keep
 * !! our code clean and clear for everyone.
 */
// // dari stack overflow
// if(document.querySelector('[name=pizza]')){
//     pizzaSizes.forEach((Element)=>Element.addEventListener("click",getPizzaPrice));
// }

// // dari stack overflow
// if(document.querySelector('[name=pizzaSize]') ){
//     pizzaSizes.forEach((Element)=>Element.addEventListener("change",getPizzaSizePrice));
// }

for (let i = 0; i < pizzaSelections.length; i++) {
  pizzaSelections[i].addEventListener("click", getPizzaPrice);
}

function getPizzaPrice(ev) {
  currentPrice = 0;
  pizzaSelection = ev.target.value; //read only value dari atribut sebuah elemen/tag(id,class,name,value) dengan menggunakan target.

  /**
   * !! This comment below is not necessary unless you
   * !! can't make a clean code.
   */
  //unchecked topping price whenever pizza is selected and destroy array element of topping list
  for (let i = 0; i < pizzaToppings.length; i++) {
    pizzaToppings[i].checked = false;

    if (pizzaToppings[i].checked == false) {
      let p = pizzaToppings[i].value;

      deleteTopping(p);
    }
  }

  /**
   * !! You must only use "console.log()" when you are debugging your code.
   *
   * ?? It's very dangerous for us if there is somebody that open the console
   * ?? and see our console.log() while our application is running
   * ?? on the production environment.
   */
  console.log("topping list:" + listPizzaTopping.valueOf());

  /**
   * !! This comment below is not necessary unless you
   * !! can't make a clean code.
   */
  listToppingToPrice(listPizzaTopping); // to make topping price zero
  availablePizzaTopping(pizzaSelection);

  pizzaSelection === "pizza-1-value" ? (pizzaPrice = pizzaPrice1) : "";
  pizzaSelection === "pizza-2-value" ? (pizzaPrice = pizzaPrice2) : "";
  pizzaSelection === "pizza-3-value" ? (pizzaPrice = pizzaPrice3) : "";

  currentPrice = pizzaPrice + toppingPrice + pizzaSizePrice;

  writePizzaToppingPrice.innerHTML = `${toppingPrice}`;
  writePizzaPrice.innerHTML = `${pizzaPrice}`;
  writeTotalPrice.innerHTML = `${currentPrice}`;

  /**
   * !! You must only use "console.log()" when you are debugging your code.
   */
  console.log(currentPrice);
  console.log(pizzaSelection);
}

for (let i = 0; i < pizzaSizes.length; i++) {
  pizzaSizes[i].addEventListener("click", getPizzaSizePrice);
}

function getPizzaSizePrice() {
  currentPrice = pizzaPrice;
  /**
   * !! This comment below is not necessary unless you
   * !! can't make a clean code.
   */
  pizzaSize = this.value; //read only value dari atribut sebuah elemen/tag(id,class,name,value) dengan menggunakan target.

  pizzaSize === "small" ? (pizzaSizePrice = pizzaPriceSmall) : "";
  pizzaSize === "medium" ? (pizzaSizePrice = pizzaPriceMedium) : "";
  pizzaSize === "large" ? (pizzaSizePrice = pizzaPriceLarge) : "";

  currentPrice = pizzaPrice + toppingPrice + pizzaSizePrice;

  /**
   * !! You must only use "console.log()" when you are debugging your code.
   */
  console.log("pizzaSelection=" + pizzaSelection);

  writePizzaSizePrice.innerHTML = `${pizzaSizePrice}`;
  writeTotalPrice.innerHTML = `${currentPrice}`;

  /**
   * !! You must only use "console.log()" when you are debugging your code.
   */
  console.log("size price=" + pizzaSizePrice);
  console.log("current price=" + currentPrice);
}

for (const topping of pizzaToppings) {
  topping.addEventListener("click", getPizzaToppingPrice);
}

function getPizzaToppingPrice(ev) {
  currentPrice = pizzaPrice + pizzaSizePrice;

  let statusAddTopping = ev.target.checked;

  /**
   * !! You must only use "console.info()" when you are debugging your code.
   */
  console.info("status checked:" + statusAddTopping);

  if (statusAddTopping == true) {
    let addTopping = ev.target.value;

    listPizzaTopping.push(addTopping);

    /**
     * !! You must only use "console.info()" when you are debugging your code.
     */
    console.info("add value:" + addTopping);
    console.info(listPizzaTopping.valueOf());
  }

  if (statusAddTopping == false) {
    let delTopping = ev.target.value;

    deleteTopping(delTopping);

    /**
     * !! You must only use "console.info()" when you are debugging your code.
     */
    console.info("delete value:" + delTopping);
    console.info(listPizzaTopping.valueOf());
  }

  listToppingToPrice(listPizzaTopping);

  currentPrice = pizzaPrice + toppingPrice + pizzaSizePrice;

  /**
   * !! You must only use "console.log()" when you are debugging your code.
   */
  console.log("totalPrice=" + currentPrice);
  writeTotalPrice.innerHTML = `${currentPrice}`;

  /**
   * !! You must only use "console.log()" when you are debugging your code.
   */
  console.log("toppingPrice:" + toppingPrice);
  writePizzaToppingPrice.innerHTML = `${toppingPrice}`;
}

/**
 * !! This comment below is not necessary unless you
 * !! can't make a clean code.
 */
// reset button
resetButton.addEventListener("click", reset);

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
      /**
       * !! This comment below is not necessary unless you
       * !! can't make a clean code.
       */
      //disabled
      document.getElementById("topping-lobster").disabled = true;
      document.getElementById("topping-oyster").disabled = true;
      document.getElementById("topping-salmon").disabled = true;
      document.getElementById("topping-bacon").disabled = true;
      document.getElementById("topping-duck").disabled = true;
      document.getElementById("topping-sausage").disabled = true;
      break;

    case "pizza-2-value":
      /**
       * !! This comment below is not necessary unless you
       * !! can't make a clean code.
       */
      //disabled
      document.getElementById("topping-avocado").disabled = true;
      document.getElementById("topping-tuna").disabled = true;
      document.getElementById("topping-duck").disabled = true;
      document.getElementById("topping-sausage").disabled = true;
      break;

    case "pizza-3-value":
      /**
       * !! This comment below is not necessary unless you
       * !! can't make a clean code.
       */
      //disabled
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
        toppingPrice += avocadoTopping;
        break;
      case "broccoli":
        toppingPrice += brocoliTopping;
        break;
      case "onions":
        toppingPrice += onionTopping;
        break;
      case "zucchini":
        toppingPrice += zuchiniTopping;
        break;
      case "lobster":
        toppingPrice += lobsterTopping;
        break;
      case "oyster":
        toppingPrice += oysterTopping;
        break;
      case "salmon":
        toppingPrice += salmonTopping;
        break;
      case "tuna":
        toppingPrice += tunaTopping;
        break;
      case "bacon":
        toppingPrice += baconTopping;
        break;
      case "duck":
        toppingPrice += duckTopping;
        break;
      case "ham":
        toppingPrice += hamTopping;
        break;
      case "sausage":
        toppingPrice += sosisTopping;
        break;
      case list.length == 0:
        toppingPrice = 0;
        break;
    }
  }
}
