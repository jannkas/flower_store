import { createFlower } from "./create-flower";
import { fetchFlowers } from "./flowers-api";
const form = document.getAnimations("create-flower");
form.addEventListener("submit", (event) => {
    event.preventDefault();
});

const addButton = document.getElementById("add-button");
const minusButton = document.getElementById("minus-button");
const addButton2 = document.getElementById("add-button-2");
const minusButton2 = document.getElementById("minus-button-2");
const addButton3 = document.getElementById("add-button-3")
const minusButton3 = document.getElementById("minus-button-3")

const amountElement = document.getElementById("amount");
const amountElement2 = document.getElementById("amount-2");
const amountElement3 = document.getElementById("amount-3");

const totalElement = document.getElementById("total");


// Plus knapperne 

addButton.addEventListener("click", () => {
    // alert("Hej fra addButton");
    amountElement.innerText = Number(amountElement.innerText) + 1;
    totalElement.innerText = Number(totalElement.innerText) + 100;
});

addButton2.addEventListener("click", () => {
    amountElement2.innerText = Number(amountElement2.innerText) + 1;
    totalElement.innerText = Number(totalElement.innerText) + 200;
});

addButton3.addEventListener("click", () => {
    amountElement3.innerText = Number(amountElement3.innerText) + 1;
    totalElement.innerText = Number(totalElement.innerText) + 300;
});

// Minus knapperne 

minusButton.addEventListener("click", () => {
    if(! Number(amountElement.innerText) == 0){
        amountElement.innerText = Number(amountElement.innerText) - 1;
        totalElement.innerText = Number(totalElement.innerText) - 100;
    } 
});

minusButton2.addEventListener("click", () => {
    if(! Number(amountElement2.innerText) == 0){
        amountElement2.innerText = Number(amountElement2.innerText) - 1;
        totalElement.innerText = Number(totalElement.innerText) - 200;
    } 
});

minusButton3.addEventListener("click", () => {
    if(! Number(amountElement3.innerText) == 0){
        amountElement3.innerText = Number(amountElement3.innerText) - 1;
        totalElement.innerText = Number(totalElement.innerText) - 300;
    } 
});

// Ny opgave: opret objekter

// jeg har udkommenteret alt det her, fordi jeg gerne ville se om det virker at hente alle mine objekter fra databasen jeg har oprettet på supabase

// const roseBed = {
//     price: 100,
//     imgUrl: "img/blomst1.webp",
//     color: "red",
//     name: "Rose Bed",
//     category: "birthday",
//     id: 4,
// }

// const purpleRain = {
//     price: 200,
//     imgUrl: "img/blomst2.webp",
//     color: "purple",
//     name: "Purple Rain",
//     category: "wedding",
//     id: 5,
// }

// const whiteTrash = {
//     price: 300,
//     imgUrl: "img/blomst3.webp",
//     color: "white",
//     name: "White Trash",
//     category: "housewarming",
//     id: 6,
// }

// Opretter loops. Sætter mine variabler ind i en liste også kaldt arrays.

// const allFlowers = [roseBed, purpleRain, whiteTrash]

// allFlowers.forEach((x) =>{
//     createFlower();
// });

async function load(){
    const body = await fetchFlowers();

    body.forEach((x) =>{
        createFlower();
    });
}

load();

