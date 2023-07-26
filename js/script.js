const pricePizza1=8;
const pricePizza2=10;
const pricePizza3=12;
let currPrice=0;
let pricePizza=0;

let checkPizza1=document.etElementById('pizza-1');
let checkPizza2=document.getElementById('pizza-2');
let checkPizza3=document.getElementById('pizza-3');

checkPizza1.addEventListener(onclick,checkPizzaSelection,false);
checkPizza2.addEventListener(onclick,checkPizzaSelection,false);
checkPizza3.addEventListener(onclick,checkPizzaSelection,false);

function checkPizzaSelection(){
    if(checkPizza1.ariaChecked==true){
        pricePizza=pricePizza1;
        alert("Checkbox is clicked");
    }
    if(checkPizza2.ariaChecked==true){
        pricePizza=pricePizza2;
        alert("Checkbox is clicked");
    }
    if(document.getElementById("pizza3").ariaChecked==true){
        pricePizza=pricePizza3;
        alert("Checkbox is clicked");
    }
}