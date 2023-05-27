// use it for pages where logged users can't access the information

const status = JSON.parse(localStorage.getItem("logged"));

const notLoggedProtection = () => {
  if (status === true) {
    window.location.replace("mainPage.html");
  }
};

// use it for the pages where the user has to be logged in to acces the page
const loggedProtection = () => {
  if (status !== true) {
    window.location.replace("login.html");
  }
};

export { notLoggedProtection, loggedProtection };
