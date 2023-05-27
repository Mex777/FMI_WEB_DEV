import { loggedProtection } from "./loginProtection.js";
import bannerSection from "../Reusables/banner.js";
import "./vimScroll.js";

loggedProtection();

const main = document.getElementById("main");
main.insertBefore(bannerSection, main.firstChild);

const APILINK =
  "https://www.googleapis.com/books/v1/volumes?printType=books&filter=full";

const btn = document.createElement("button");
btn.innerText = "Log out";
btn.classList.add("top-left");
btn.addEventListener("click", () => {
  localStorage.setItem("logged", false);
  localStorage.setItem("user_id", null);
  window.location.replace("./index.html");
});
btn.style.backgroundColor = "#f2ce72";
btn.style.color = "black";
btn.style.border = "1px solid black";
btn.style.borderRadius = "5px";
btn.style.padding = ".5rem";

main.appendChild(btn);

const bookList = document.createElement("div");
bookList.className = "book-list";

const createBook = (obj, id) => {
  obj = obj.volumeInfo;

  const div = document.createElement("div");
  div.className = "book";

  const text = document.createElement("div");
  text.className = "book-content";

  const title = document.createElement("h3");
  title.innerText = obj.title;

  const author = document.createElement("h4");
  author.innerText = obj.authors[0];

  const description = document.createElement("p");
  if (obj.description) description.innerText = obj.description;

  const img = document.createElement("img");
  img.src = obj.imageLinks.thumbnail;

  text.append(title, author, description);
  div.append(text, img);

  return div;
};

const fetchBooks = async (args) => {
  try {
    const response = await fetch(APILINK + `&q=${args}`);
    const data = await response.json();

    if (data.items) {
      for (let index = 0; index < 10; ++index) {
        const book = createBook(data.items[index], index);

        bookList.append(book);
      }
    } else {
      const h1 = document.createElement("h1");
      h1.innerText = "No books found";
      bookList.append(h1);
    }
  } catch (error) {
    console.log("ERROR fetching data", error);
  }
};

// apiRequest("ai");

const card = document.createElement("form");
card.className = "card";

const searchBar = document.createElement("input");
searchBar.className = "search-bar";
searchBar.placeholder = "Search for your favourite book";
searchBar.type = "search";

card.append(searchBar);

main.append(card, bookList);

card.onsubmit = (e) => {
  e.preventDefault();

  if (searchBar.value) {
    while (bookList.firstChild) {
      bookList.removeChild(bookList.firstChild);
    }

    fetchBooks(searchBar.value);
  }
};
