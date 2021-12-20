import menuImg from "./images/menu-img.jpeg";

function createMenuPage() {
  const introduce =
    "Continually inspired by nature, the creative process  begins in working closely with the farmers, fishermen, producers and artisans who cultivate bespoke produce exclusively for us. For each dish, the growth of every element and the selection of every ceramic piece is carefully considered and crafted for its role in the dining experience.";

  const menuPage = document.createElement("div");
  menuPage.setAttribute("class", "container menu");

  const img = document.createElement("img");
  img.src = menuImg;

  const menuMain = document.createElement("div");
  menuMain.setAttribute("class", "menu-main");

  const header = document.createElement("h2");
  header.textContent = "MENU";

  const menuIntroduce = document.createElement("p");
  menuIntroduce.textContent = introduce;

  const courses = createMenu();

  menuMain.appendChild(header);
  menuMain.appendChild(menuIntroduce);

  menuPage.appendChild(img);
  menuPage.appendChild(menuMain);
  menuPage.appendChild(courses);

  return menuPage;
}

function createMenu() {
  const courses = {
    "First course—hors d'oeuvre": "Canapés à l'Amiral",
    "Second course—soups": "Cream of barley soup",
    "Third course—fish": "Poached salmon with mousseline sauce",
    "Fourth course—main": "Filets mignon lili",
    "Fifth course—removes": "Lamb with mint sauce",
    "Sixth course—punch or sorbet": "Punch romaine",
    "Seventh course—roast": "Roasted squab on Wilted cress",
    "Eighth course—salad": "Asparagus salad with champagne-saffron vinaigrette",
    "Ninth course—cold dish": "Pâté de foie gras",
    "Tenth course—sweets": "Waldorf pudding",
    "Eleventh course—dessert": "Assorted fresh fruits and cheeses",
  };

  function createCourse(course, meal) {
    const courseName = document.createElement("h4");
    courseName.textContent = course;
    const mealName = document.createElement("p");
    mealName.textContent = meal;

    menu.appendChild(courseName);
    menu.appendChild(mealName);
  }

  const menu = document.createElement("div");
  menu.classList.add("course-meal");

  const header = document.createElement("h2");
  header.textContent = "8-COURSE MENU";
  menu.appendChild(header);

  for (let index in courses) {
    createCourse(index, courses[index]);
  }
  return menu;
}

export { createMenuPage };
