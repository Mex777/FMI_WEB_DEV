const bannerSection = document.createElement("section");
bannerSection.className = "banner";

const img = document.createElement("img");
const imgLink =
  "https://uoch.edu.pk/wp-content/uploads/2018/01/library-banner.jpg";
img.src = imgLink;
img.alt = "BANNER PICTURE";
bannerSection.appendChild(img);

const title = document.createElement("h1");
title.innerHTML =
  "Explore, Learn, and Expand Your Mind: <br/> Your Library for Lifelong Learning.";
bannerSection.appendChild(title);

const nav = document.createElement("div");
nav.className = "top-right";

const dropdown = document.createElement("div");
dropdown.className = "dropdown";

const button = document.createElement("button");
button.className = "dropbtn";
button.innerHTML =
  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16"> <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" /></svg>';

const drop = document.createElement("div");
drop.className = "dropdown-content";

const option1 = document.createElement("a");
option1.href = "./index.html";
option1.textContent = "Home";

const option2 = document.createElement("a");
option2.href = "./login.html";
option2.textContent = "Login";

const option3 = document.createElement("a");
option3.href = "./sign-up.html";
option3.textContent = "Sign up";

drop.append(option1, option2, option3);
dropdown.append(button, drop);
nav.appendChild(dropdown);
bannerSection.appendChild(nav);

export default bannerSection;
