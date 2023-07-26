const pizzaPrice1=8;
const pizzaPrice2=10;
const pizzaPrice3=12;
const pizzaPriceSmall=-1;
const pizzaPriceMedium=0;
const pizzaPriceLarge=2;

const avocadoTopping=1;
const brocoliTopping=1
const onionTopping=1;
const zuchiniTopping=1;
const lobsterTopping=2;
const oysterTopping=2;
const salmonTopping=2;
const tunaTopping=2;
const baconTopping=3;
const duckTopping=3;
const hamTopping=3;
const sosisTopping=3;



let currentPrice=0;
let pizzaPrice=0;
let pizzaSizePrice=0;
let toppingPrice=0;
let pizzaSize="";
let listPizzaTopping=[];
let pizzaSelection='';

const pizzaSelections=document.querySelectorAll('[name=pizza]');
const pizzaSizes=document.querySelectorAll('[name=pizzaSize]');
const pizzaToppings=document.querySelectorAll('[name=topping]');
const writePizzaPrice=document.querySelector('div>p>span#pizzaPrice');
const writePizzaSizePrice=document.querySelector('div>p>span#sizePrice');
const writePizzaToppingPrice=document.querySelector('div>p>span#toppingPrice');
const writeTotalPrice=document.querySelector('div>p>span#totalPrice');
const resetButton=document.getElementById('reset-id');
const reset =()=>{location.reload();};

// // dari stack overflow
// if(document.querySelector('[name=pizza]')){
//     pizzaSizes.forEach((Element)=>Element.addEventListener("click",getPizzaPrice));
// }


// // dari stack overflow
// if(document.querySelector('[name=pizzaSize]') ){
//     pizzaSizes.forEach((Element)=>Element.addEventListener("change",getPizzaSizePrice));
// }



for (let i=0;i<pizzaSelections.length;i++ ){
     
    pizzaSelections[i].addEventListener('click',getPizzaPrice);
}

function getPizzaPrice(ev){
    currentPrice=0;
    pizzaSelection=ev.target.value; //read only value dari atribut sebuah elemen/tag(id,class,name,value) dengan menggunakan this.
    availablePizzaTopping(pizzaSelection);
    pizzaSelection==="pizza1"?pizzaPrice=pizzaPrice1:""
    pizzaSelection==="pizza2"?pizzaPrice=pizzaPrice2:""
    pizzaSelection==="pizza3"?pizzaPrice=pizzaPrice3:""
    
    currentPrice=pizzaPrice+toppingPrice+pizzaSizePrice;
    writePizzaPrice.innerHTML=`${pizzaPrice}`;
    writeTotalPrice.innerHTML=`${currentPrice}`;
    console.log(currentPrice);
    console.log(pizzaSelection);
}

for (let i=0;i<pizzaSizes.length;i++){
        pizzaSizes[i].addEventListener('click',getPizzaSizePrice)
}


function getPizzaSizePrice(){
        currentPrice=pizzaPrice;
        pizzaSize=this.value; //read only value dari atribut sebuah elemen/tag(id,class,name,value) dengan menggunakan target.
        pizzaSize==="small"?pizzaSizePrice=pizzaPriceSmall:""
        pizzaSize==="medium"?pizzaSizePrice=pizzaPriceMedium:""
        pizzaSize==="large"?pizzaSizePrice=pizzaPriceLarge:""
        currentPrice=pizzaPrice+toppingPrice+pizzaSizePrice;
        console.log("pizzaSelection="+pizzaSelection);
        writePizzaSizePrice.innerHTML=`${pizzaSizePrice}`;
        writeTotalPrice.innerHTML=`${currentPrice}`;
        console.log("size price="+pizzaSizePrice);
        console.log("current price="+currentPrice);
}

for(const topping of pizzaToppings){ 
    topping.addEventListener('click',getPizzaToppingPrice);
  }

function getPizzaToppingPrice(ev){
    currentPrice=pizzaPrice+pizzaSizePrice;
    let statusAddTopping=ev.target.checked;
   
    console.info("status checked:"+statusAddTopping);
    
    if(statusAddTopping==true){
        let addTopping=ev.target.value;
        listPizzaTopping.push(addTopping);
        console.info("add value:"+addTopping); 
        console.info(listPizzaTopping.valueOf());
    }
    
    if(statusAddTopping==false){
        let delTopping=ev.target.value;
        deleteTopping(delTopping);
        console.info("delete value:"+delTopping);
        console.info(listPizzaTopping.valueOf()); 
    }
    listToppingToPrice(listPizzaTopping);
    currentPrice=pizzaPrice+toppingPrice+pizzaSizePrice;
    console.log("totalPrice="+currentPrice);
    writeTotalPrice.innerHTML=`${currentPrice}`;
    console.log("toppingPrice:"+toppingPrice); 
    writePizzaToppingPrice.innerHTML=`${toppingPrice}`
}

//reset button
resetButton.addEventListener('click',reset);



function deleteTopping(list){
    for (let i=0; i<listPizzaTopping.length;i++){
        if(listPizzaTopping[i]==list){  
            listPizzaTopping.splice(i,1);
        }
    }
}


function availablePizzaTopping(check){
 
    switch(check){
        case "pizza1":
            //able
            document.getElementById('avocado-id').disabled=false;
            document.getElementById('tuna-id').disabled=false;
            document.getElementById('duck-id').disabled=false;
            document.getElementById('sosis-id').disabled=false;

            document.getElementById('avocado-id').disabled=false;
            document.getElementById('lobster-id').disabled=false;
            document.getElementById('oyster-id').disabled=false;
            document.getElementById('salmon-id').disabled=false;
            //disabled
            document.getElementById('lobster-id').disabled=true;
            document.getElementById('oyster-id').disabled=true;
            document.getElementById('salmon-id').disabled=true;
            document.getElementById('bacon-id').disabled=true;
            document.getElementById('duck-id').disabled=true;
            document.getElementById('sosis-id').disabled=true;
            break;
        case "pizza2":
            //able
            document.getElementById('lobster-id').disabled=false;
            document.getElementById('oyster-id').disabled=false;
            document.getElementById('salmon-id').disabled=false;
            document.getElementById('bacon-id').disabled=false;
            document.getElementById('duck-id').disabled=false;
            document.getElementById('sosis-id').disabled=false;

            document.getElementById('avocado-id').disabled=false;
            document.getElementById('lobster-id').disabled=false;
            document.getElementById('oyster-id').disabled=false;
            document.getElementById('salmon-id').disabled=false;
            //disabled
            document.getElementById('avocado-id').disabled=true;
            document.getElementById('tuna-id').disabled=true;         
            document.getElementById('duck-id').disabled=true;
            document.getElementById('sosis-id').disabled=true;
            break;
        case "pizza3":
            //able
            document.getElementById('lobster-id').disabled=false;
            document.getElementById('oyster-id').disabled=false;
            document.getElementById('salmon-id').disabled=false;
            document.getElementById('bacon-id').disabled=false;
            document.getElementById('duck-id').disabled=false;
            document.getElementById('sosis-id').disabled=false

            document.getElementById('avocado-id').disabled=false;
            document.getElementById('tuna-id').disabled=false;
            document.getElementById('duck-id').disabled=false;
            document.getElementById('sosis-id').disabled=false;
            //disabled
            document.getElementById('avocado-id').disabled=true;
            document.getElementById('lobster-id').disabled=true;
            document.getElementById('oyster-id').disabled=true;
            document.getElementById('salmon-id').disabled=true;
            break;
    }
}

function listToppingToPrice(list){
    toppingPrice=0;
   
    for(let i of list){
        switch(i){
        case "avocado":
           toppingPrice+=avocadoTopping;
            break;
        case "brocoli":
          toppingPrice+=brocoliTopping;
            break;
        case "onion":
          toppingPrice+=onionTopping;
            break;
        case "zuchini":
            toppingPrice+=zuchiniTopping;
            break;
        case 'lobster':
            toppingPrice+=lobsterTopping;
            break;
        case 'oyster':
           toppingPrice+=oysterTopping;
            break;       
        case 'salmon':
           toppingPrice+=salmonTopping;
            break;
        case 'tuna':
         toppingPrice+=tunaTopping;
            break;
        case 'bacon':
          toppingPrice+=baconTopping;
            break;
        case 'duck':
         toppingPrice+=duckTopping;
            break;
        case 'ham':
        toppingPrice+=hamTopping;
            break;
        case 'sosis':
          toppingPrice+=sosisTopping;
            break;
        case list.length==0:
            toppingPrice=0;
           break;
       }
    }
     
    
}

   
   