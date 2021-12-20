import "./style.css";
import { createNavElement } from "./nav-bar";
import { createHomepage } from "./home";
import { createContactPage } from "./contact";
import { createMenuPage } from "./menu";
import { switchTabs } from "./switch-tab";
const brandName = "Aslasic";
const pages = ["home", "menu", "contact"];

const content = document.querySelector("#content");

const navBar = createNavElement(brandName, pages);
content.appendChild(navBar);

const homePage = createHomepage(brandName);
content.appendChild(homePage);

const menuPage = createMenuPage();
menuPage.classList.add("hide-page");
content.appendChild(menuPage);

const contact = createContactPage(brandName);
contact.classList.add("hide-page");
content.appendChild(contact);

switchTabs();

export { pages };
