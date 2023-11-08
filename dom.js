/*
-Create an object called “DOMSelectors” to hold your DOM Selectors
-Create a function that creates an object and calls the following functions
-Create a function that injects the newly created object into the DOM
-Create a function that clears the input fields after injecting the object
-Create a function to remove an object after they have been created
*/

const DOMSelectors = {
    form: document.querySelector("#form"),
    titleName: document.getElementById("title-name"),
    captionText: document.getElementById("caption-text"),
    imageLink: document.getElementById("image-link"),
    box: document.querySelector("#box"),
    card: document.querySelector(".card"),
    button: document.getElementById("btn"),
   
};
    

function addcard(){
    DOMSelectors.box.insertAdjacentHTML("afterend",
        `<div class="card" id="box">
        <h1 class="title-name"> ${DOMSelectors.titleName.value} </h1>
        <img src= "${DOMSelectors.imageLink.value}" alt="image" class="card-image">
        <h3 class="caption-text"> ${DOMSelectors.captionText.value} </h3>
        <button class="remove"> Remove </button>
        </div>`);
}

function removecard(){
    document.querySelectorAll(".remove").forEach((button) => {
       button.addEventListener("click", function(event){
           event.target.parentElement.remove();
       });
    });
}

function clearFields() {
   DOMSelectors.titleName.value ="";
   DOMSelectors.imageLink.value="";
   DOMSelectors.captionText.value="";
}

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    addcard();
    removecard();
    clearFields();
    });