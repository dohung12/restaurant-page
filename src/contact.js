import ContactImg from "./images/contact-img.jpeg";

function createContactPage(brandName) {
  const phoneNumber = "(423) 542-6976";
  const restaurantAddress =
    "278 Cripple Creek Loop Watauga, Tennessee(TN), 37694";

  const contactPage = document.createElement("div");
  contactPage.setAttribute("class", "container contact");

  const contactHeader = document.createElement("h2");
  contactHeader.textContent = "CONTACT  US";

  const contactMain = document.createElement("div");
  contactMain.setAttribute("class", "contact-main");

  const contactInfo = document.createElement("p");
  contactInfo.innerHTML = `To get in touch with the ${brandName} team, simply fill out the contact form below. Alternatively you can telephone us on <span> ${phoneNumber}</span> or email us at <span> reservations@${brandName}.com </span>`;

  const address = document.createElement("p");
  address.textContent = restaurantAddress;

  const form = createForm();

  const img = document.createElement("img");
  img.src = ContactImg;

  contactMain.appendChild(contactHeader);
  contactMain.appendChild(contactInfo);
  contactMain.appendChild(address);
  contactMain.appendChild(form);

  contactPage.appendChild(contactMain);
  contactPage.appendChild(img);

  return contactPage;
}

function createForm() {
  const form = document.createElement("form");

  const nameInput = document.createElement("input");
  nameInput.setAttribute("name", "name");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("required", true);
  nameInput.setAttribute("placeholder", "Name");
  nameInput.setAttribute("class", "form-control");

  const emailInput = document.createElement("input");
  emailInput.setAttribute("name", "email");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("required", true);
  emailInput.setAttribute("placeholder", "Email");
  emailInput.setAttribute("class", "form-control");

  const phoneNumInput = document.createElement("input");
  phoneNumInput.setAttribute("name", "name");
  phoneNumInput.setAttribute("type", "tel");
  phoneNumInput.setAttribute("required", true);
  phoneNumInput.setAttribute("placeholder", "Mobile");
  phoneNumInput.setAttribute("class", "form-control");

  const messageInput = document.createElement("textarea");
  messageInput.setAttribute("name", "message");
  messageInput.setAttribute("id", "message");
  messageInput.setAttribute("rows", "4");
  messageInput.setAttribute("cols", "33");
  messageInput.setAttribute("placeholder", "Message");
  messageInput.setAttribute("class", "form-control");

  const submitBtn = document.createElement("button");
  submitBtn.setAttribute("class", "btn submit-btn");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "SUBMIT";
  submitBtn.setAttribute("class", "form-control");

  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(phoneNumInput);
  form.appendChild(messageInput);
  form.appendChild(submitBtn);

  return form;
}

export { createContactPage };
