import bannerSection from "../Reusables/banner.js";
import { notLoggedProtection } from "./loginProtection.js";
import "./vimScroll.js";

notLoggedProtection();

const main = document.getElementById("main");
main.insertBefore(bannerSection, main.firstChild);
