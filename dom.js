const form = document.querySelector("#form");
const firstName = document.querySelector(".first-name");
console.log(firstName);
DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelectorAll("h2"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    DOMSelectors.h2s.forEach(
        (header) => (header.textContent = DOMSelectors.firstName.value)
    );
});