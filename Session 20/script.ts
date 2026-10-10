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
const form = document.querySelector("#signupForm") as HTMLFormElement;
const submit = document.querySelector("#submit") as HTMLButtonElement;
const password = document.querySelector("#password") as HTMLInputElement;
const confirmPassword = document.querySelector(
  "#confirmPassword",
) as HTMLInputElement;
submit.disabled = true;

function checkPasswords() {
  if (
    password.value !== "" &&
    confirmPassword.value !== "" &&
    password.value === confirmPassword.value
  ) {
    console.log("password match");
    submit.disabled = false;
  } else {
    console.log("password do not match");
    submit.disabled = true;
  }
}

password.addEventListener("input", checkPasswords);
confirmPassword.addEventListener("input", checkPasswords);

//   console.log(username, email);
form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    console.log("Invalid form");
    return;
  }
  console.log("Form is Valid");
  const formData = new FormData(form);
  const username = formData.get("username");
  const email = formData.get("email");
  console.log(username, email);

  //   const submit = formData.get("submit")
});
// const username = formData.get("username");
// console.log(username);
