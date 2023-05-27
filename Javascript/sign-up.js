import bannerSection from "../Reusables/banner.js";
import { notLoggedProtection } from "./loginProtection.js";

notLoggedProtection();

const main = document.getElementById("main");
main.insertBefore(bannerSection, main.firstChild);

const card = document.createElement("div");
card.className = "card";

const form = document.createElement("form");
form.classList.add("form");

const name = document.createElement("div");
const labelMail = document.createElement("label");
labelMail.innerText = "Name";
const inputName = document.createElement("input");
inputName.required = true;
name.append(labelMail, inputName);
name.classList.add("input");

const email = document.createElement("div");
const labelEmail = document.createElement("label");
labelEmail.innerText = "Email";
const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.required = true;
email.append(labelEmail, inputEmail);
email.classList.add("input");

const password = document.createElement("div");
const labelPassword = document.createElement("label");
labelPassword.innerText = "Password";
const inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.required = true;
password.append(labelPassword, inputPassword);
password.classList.add("input");

const repeatPassword = document.createElement("div");
const labelRepeatPassword = document.createElement("label");
labelRepeatPassword.innerText = "Repeat Password";
const inputRepeatPassword = document.createElement("input");
inputRepeatPassword.type = "password";
inputRepeatPassword.required = true;
repeatPassword.append(labelRepeatPassword, inputRepeatPassword);
repeatPassword.classList.add("input");

const submitButton = document.createElement("button");
submitButton.innerText = "Create new account";
submitButton.style.color = "black";
submitButton.type = "submit";

submitButton.addEventListener("click", (e) => {
  e.stopPropagation();
});

form.onsubmit = (e) => {
  e.preventDefault();
  if (inputPassword.value != inputRepeatPassword.value) {
    alert("Passwords do not match");
  } else {
    if (localStorage.getItem("user") === null) {
      localStorage.setItem(
        "user",
        JSON.stringify([{ username: "z@z.z", name: "name", password: "z" }])
      );

      localStorage.setItem("logged", false);
    } else {
      const list = JSON.parse(localStorage.getItem("user"));
      for (let user in list) {
        if (list[user].user === inputEmail.value) {
          alert("Email already used");
          return;
        }
      }
    }

    alert("Signup worked");
    const user = {
      user: inputEmail.value,
      name: inputName.value,
      password: inputPassword.value,
    };
    const list = JSON.parse(localStorage.getItem("user"));
    list.push(user);
    localStorage.setItem("user", JSON.stringify(list));
  }
};

form.append(name, email, password, repeatPassword, submitButton);
card.appendChild(form);
main.appendChild(card);
