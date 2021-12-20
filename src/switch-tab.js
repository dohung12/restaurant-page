import { pages } from ".";

function switchTabs() {
  const navLinks = document.querySelectorAll(".nav-links");

  navLinks.forEach((links) => {
    links.addEventListener("click", () => {
      const linkedPage = document.querySelector(`.${links.dataset.id}`);
      for (let page of pages) {
        const pageSelector = document.querySelector(`.${page}`);
        pageSelector.classList.add("hide-page");
      }
      linkedPage.classList.remove("hide-page");
    });
  });
}
export { switchTabs };
