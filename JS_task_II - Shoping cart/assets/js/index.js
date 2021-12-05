import { quantityDropMenu } from "./functionsToCreateElements.js";

// Header elements
const header = document.querySelector("header");
const titleHolder = document.createElement("div");

const title = document.createElement("h1");
title.innerHTML = "products";
titleHolder.append(title);
header.append(titleHolder);

//Section title elements
const section = document.querySelector('section');
const titleRowDiv = document.createElement('div');

const divTitleItem = document.createElement('div');
const itemTitle = document.createElement('p');
itemTitle.innerHTML = 'item';

const divTitleQuantity = document.createElement('div');
const quantityTitle = document.createElement('p');
quantityTitle.innerHTML = 'quantity';

const divTitlePrice = document.createElement('div');
const priceTitle = document.createElement('p');
priceTitle.innerHTML = 'price';

divTitleItem.append(itemTitle);
divTitleQuantity.append(quantityTitle);
divTitlePrice.append(priceTitle);

titleRowDiv.append(divTitleItem);
titleRowDiv.append(divTitleQuantity);
titleRowDiv.append(divTitlePrice);

section.append(titleRowDiv);

// Section row element - first product row

const productRowHolder = document.createElement('div');

const firstProductRow = document.createElement("div");
const firstItemDiv = document.createElement("div");
firstItemDiv.innerHTML = 'element 1';

const firstQuantityDiv = document.createElement("div");

quantityDropMenu(firstQuantityDiv, 'firstProduct', "700");

const priceDiv = document.createElement("div");
const firstPrice = 700;
priceDiv.innerHTML = `$ ${firstPrice} `; 

firstProductRow.append(firstItemDiv);
firstProductRow.append(firstQuantityDiv);
firstProductRow.append(priceDiv);

// Section row element - second product row

const secondProductRow = document.createElement("div");
const seconditemDiv = document.createElement("div");
seconditemDiv.innerHTML = 'element 2';

const secondQuantityDiv = document.createElement("div");

quantityDropMenu(secondQuantityDiv, 'secondProduct', "1400");

const secondPriceDiv = document.createElement("div");
const secondPrice = 1400;
secondPriceDiv.innerHTML = `$ ${secondPrice}`; 

secondProductRow.append(seconditemDiv);
secondProductRow.append(secondQuantityDiv);
secondProductRow.append(secondPriceDiv);

// Section row element - second product row
const thirdProductRow = document.createElement("div");
const thirditemDiv = document.createElement("div");
thirditemDiv.innerHTML = 'element 3';

const thirdQuantityDiv = document.createElement("div");

quantityDropMenu(thirdQuantityDiv, 'thirdProduct', "140");

const thirdPriceDiv = document.createElement("div");
const thirdPrice = 140;
thirdPriceDiv.innerHTML = `$ ${thirdPrice}`; 

thirdProductRow.append(thirditemDiv);
thirdProductRow.append(thirdQuantityDiv);
thirdProductRow.append(thirdPriceDiv);

productRowHolder.append(firstProductRow);
productRowHolder.append(secondProductRow);
productRowHolder.append(thirdProductRow);

section.append(productRowHolder);
section.append(productRowHolder);
section.append(productRowHolder);

// Foother elements
const footer = document.querySelector("footer");
const footerDiv = document.createElement('div');
footer.append(footerDiv);

let selectList = document.querySelectorAll('select');
let overalSum = 0;

selectList.forEach(list => {
    list.addEventListener("change", () => {
       
        let price,
            value,
            result = 0;

        for(let i = 0; i < selectList.length; i++){
            
            price = selectList[i].options[selectList[i].selectedIndex].getAttribute('price');
            value = selectList[i].options[selectList[i].selectedIndex].text;
            
            switch(selectList[0].value){
                case "0":
                    let firstRow = document.querySelector('section > div:last-child > div:first-child');
                    firstRow.classList += ' d-none';
                    break;
            }
            switch(selectList[1].value){
                case "0":
                    let secondRow = document.querySelector('section > div:last-child > div:first-child + div');
                    secondRow.classList += ' d-none';
                    break;
            }
            switch(selectList[2].value){
                case "0":
                    let thirdRow = document.querySelector('section > div:last-child > div:first-child + div + div');
                    thirdRow.classList += ' d-none';
                    break;
            }
           
            result += price * value;
            overalSum = result;
        
            footerDiv.innerHTML = `Total : $ ${overalSum}`;
        }
        if( 
            productRowHolder.children[0].classList.contains('d-none') && 
            productRowHolder.children[1].classList.contains('d-none') && 
            productRowHolder.children[2].classList.contains('d-none')
          ){
            let emptyRow = document.createElement('div');
            emptyRow.setAttribute('id', 'noContent')
            emptyRow.innerHTML = 'There are no items in your cart.';
            productRowHolder.append(emptyRow); 
        }
    })
});