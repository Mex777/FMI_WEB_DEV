const scrollAmount = 100;

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key === "j") {
    window.scrollBy(0, scrollAmount); // Scroll down
  } else if (key === "k") {
    window.scrollBy(0, -scrollAmount); // Scroll up
  }
});
