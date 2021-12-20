function createNavElement(brandName, navPages) {
  let nav = document.createElement("nav");

  nav.classList.add("navbar");

  const brand = createBrand(brandName);
  nav.appendChild(brand);

  const navBar = createNavBar(navPages);
  nav.appendChild(navBar);

  return nav;
}

function createNavBar(pages) {
  let navbar = document.createElement("ul");
  navbar.classList.add("navbar-nav");

  for (let page of pages) {
    const navItem = createNavItem(page);
    navbar.appendChild(navItem);
  }
  return navbar;
}

function createNavItem(page) {
  let navItem = document.createElement("li");
  navItem.classList.add("nav-item");

  const links = createNavLink(page);

  navItem.appendChild(links);

  return navItem;
}

function createNavLink(page) {
  let links = document.createElement("a");

  links.setAttribute("data-id", `${page}`);
  links.classList.add("nav-links");
  links.textContent = page;

  return links;
}

function createBrand(brandName) {
  let brand = document.createElement("h1");
  brand.textContent = brandName;
  brand.classList.add("logo");

  return brand;
}

export { createNavElement };
