"use strict";
// QuerySelector
// QuerySelector it returns the first matching element
// const heading = document.querySelector("h1");
// const btn = document.querySelector(".btn");
// QuerySelectorAll
// const buttons = document.querySelectorAll(".btn");
// Returns Nodelist
// buttons.forEach((button) => {
//   console.log(button.tagName);
// });
// const emailInput = document.querySelector("#email") as HTMLInputElement;
// emailInput.addEventListener("input", ()=>{
//     console.log(emailInput.value);
// })
// console.log(emailInput.value);
// Ts Generally sees this as Element | null
// Event Listeners
// Syntax: element.addEventListener("event", handler)
// function handleClick() {
//   console.log("Button Clicked");
// }
// const btn = document.querySelector("button")!;
// btn.addEventListener("click", (e) => {
//   console.log(e);
// });
// btn.removeEventListener("click", handleClick);
// const form = document.querySelector("form");
// form?.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("Form has been submitted!");
// });
// UI - Dynamic Update
// const input = document.querySelector("#name") as HTMLInputElement;
// const display = document.querySelector("#display")!;
// input.addEventListener("input", () => {
//   const currentVal = input.value;
//   display.innerHTML = ` <b>${currentVal}</b>`;
// });
// Form Handling
// const form = document.querySelector("#signupForm")!;
// const nameInput = document.querySelector("#name") as HTMLInputElement;
// const emailInput = document.querySelector("#email") as HTMLInputElement;
// FormData
const form = document.querySelector("#signupForm");
const submit = document.querySelector("#submit");
submit.disabled = true;
const formData = new FormData(form);
const username = formData.get("username");
const email = formData.get("email");
const password = formData.get("password");
const confirmpassword = formData.get("confirmPassword");
//   const submit = formData.get("submit")
if (password !== confirmpassword) {
    console.log("password do not match");
    submit.disabled = true;
}
else {
    console.log("password match");
    submit.disabled = false;
}
//   console.log(username, email);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
        console.log("Invalid form");
        return;
    }
    console.log("Form is Valid");
});
// const username = formData.get("username");
// console.log(username);
