import bannerSection from "../Reusables/banner.js";
import { notLoggedProtection } from "./loginProtection.js";

notLoggedProtection();

const main = document.getElementById("main");
main.insertBefore(bannerSection, main.firstChild);

document.getElementById("form").onsubmit = (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (localStorage.getItem("user") != null) {
    const users = JSON.parse(localStorage.getItem("user"));

    console.log(users);
    let loginOutcome = false;
    users.forEach((user) => {
      if (email == user.user && password == user.password) {
        loginOutcome = true;
        return;
      }
    });

    if (loginOutcome) {
      localStorage.setItem("logged", true);
      localStorage.setItem("user_id", email);
      window.location.replace("./mainPage.html");
    } else {
      alert("Gresit nume / parola");
    }
  }
};
