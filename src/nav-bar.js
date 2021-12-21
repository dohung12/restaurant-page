function createNavElement(brandName, navPages) {
  const nav = document.createElement("nav");

  nav.classList.add("navbar");

  const brand = createBrand(brandName);
  nav.appendChild(brand);

  const navBar = createNavBar(navPages);
  nav.appendChild(navBar);

  return nav;
}

function createNavBar(pages) {
  const navbar = document.createElement("ul");
  navbar.classList.add("navbar-nav");

  for (let page of pages) {
    const navItem = createNavItem(page);
    navbar.appendChild(navItem);
  }
  return navbar;
}

function createNavItem(page) {
  const navItem = document.createElement("li");
  navItem.classList.add("nav-item");

  const links = createNavLink(page);

  navItem.appendChild(links);

  return navItem;
}

function createNavLink(page) {
  const links = document.createElement("a");

  links.setAttribute("data-id", `${page}`);
  links.classList.add("nav-links");
  links.textContent = page;

  return links;
}

function createBrand(brandName) {
  const brand = document.createElement("h1");
  brand.textContent = brandName;
  brand.classList.add("logo");

  return brand;
}

export { createNavElement };
