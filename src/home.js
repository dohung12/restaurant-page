import homePageImg from "./images/homepage-img.jpeg";

function createHomePage(brandName) {
  const intro = `${brandName} is ranked #19 in "50 Must Try Restaurant in Atlantis"`;

  const homePage = document.createElement("div");
  homePage.setAttribute("class", "container home");

  const img = document.createElement("img");
  img.src = homePageImg;

  const header = document.createElement("div");
  const headerText = document.createElement("h1");
  const headerIntro = document.createElement("p");

  headerText.innerText = brandName;
  headerText.classList.add("header-text");
  headerIntro.innerText = intro;
  headerIntro.classList.add("header-intro");

  header.classList.add("header");
  header.appendChild(headerText);
  header.appendChild(headerIntro);

  homePage.appendChild(img);
  homePage.appendChild(header);

  return homePage;
}

export { createHomePage as createHomepage };
