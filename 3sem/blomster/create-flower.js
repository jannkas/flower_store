const mainContent = document.getElementById("main-content");

export function createFlower(x){
    console.log(x.id);

    // hiver fat i skabelonen fra HTML
    const template = document.getElementById("template");
    
    // clone template
    const clone = document.importNode(template.content, true);

    //  udfylder img på kopien
const img = clone.getElementById("img");
img.src = x.imgUrl;
img.id = "image-" + x.id;

// udfylde minus knappen
const minusClone = clone.getElementById("minus-button");
minusClone.id = "minus-button-" + x.id;

// udfylde nyt id for plus button
const addClone = clone.getElementById("add-button");
addClone.id = "add-button-" + x.id;

// udfylde nyt id for amount p-tag
const cloneP = clone.getElementById("amount");
cloneP.id = "amount-" + x.id;

// få plus knap til at virke
addClone.addEventListener("click", () => {
    // console.log("plus knap");
    cloneP.innerText = Number(cloneP.innerText) + 1;
});

// få minus knap til at virke 
minusClone.addEventListener("click", () => {
    // console.log("minus knap");
    if (Number(cloneP.innerText))
    cloneP.innerText = Number(cloneP.innerText) - 1;
});

// Få amount knappen til at virke 


// sætter den udfyldte kopi ind på hjemmesiden
mainContent.appendChild(clone);
}