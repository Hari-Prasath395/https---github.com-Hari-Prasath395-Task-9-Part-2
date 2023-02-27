const firstNameLabel = document.createElement("label");
firstNameLabel.setAttribute("for", "first-name");
firstNameLabel.textContent = "First Name:";

const firstNameInput = document.createElement("input");
firstNameInput.setAttribute("type", "text");
firstNameInput.setAttribute("id", "first-name");
firstNameInput.setAttribute("name", "first-name");
firstNameInput.setAttribute("placeholder", "First Name");
firstNameInput.required = true;

const firstNameContainer = document.createElement("div");
firstNameContainer.setAttribute("class", "form-group");
firstNameContainer.appendChild(firstNameLabel);
firstNameContainer.appendChild(firstNameInput);

const lastNameLabel = document.createElement("label");
lastNameLabel.setAttribute("for", "last-name");
lastNameLabel.textContent = "Last Name:";

const lastNameInput = document.createElement("input");
lastNameInput.setAttribute("type", "text");
lastNameInput.setAttribute("id", "last-name");
lastNameInput.setAttribute("name", "last-name");
lastNameInput.setAttribute("placeholder", "Last Name");
lastNameInput.setAttribute("required", "");

const lastNameContainer = document.createElement("div");
lastNameContainer.setAttribute("class", "form-group");
lastNameContainer.appendChild(lastNameLabel);
lastNameContainer.appendChild(lastNameInput);

const addressLabel = document.createElement("label");
addressLabel.setAttribute("for", "address");
addressLabel.textContent = "Address:";

const addressArea = document.createElement("textarea");
addressArea.setAttribute("name", "address");
addressArea.setAttribute("id", "address");
addressArea.setAttribute("cols", "30");
addressArea.setAttribute("rows", "4");
addressArea.setAttribute("placeholder", "Enter Address");

const addressContainer = document.createElement("div");
addressContainer.setAttribute("class", "form-group");
addressContainer.appendChild(addressLabel);
addressContainer.appendChild(addressArea);

const pincodeLabel = document.createElement("label");
pincodeLabel.setAttribute("for", "pincode");
pincodeLabel.textContent = "Pincode:";

const pincode = document.createElement("input");
pincode.setAttribute("type", "text");
pincode.setAttribute("id", "pincode");
pincode.setAttribute("placeholder", "Enter your pincode");
pincode.setAttribute("required", true);

const pincodeContainer = document.createElement("div");
pincodeContainer.setAttribute("class", "form-group");
pincodeContainer.appendChild(pincodeLabel);
pincodeContainer.appendChild(pincode);

const genderLabel = document.createElement("label");
genderLabel.setAttribute("for", "gender");
genderLabel.textContent = "Gender:";

const mLabel = document.createElement("label");
mLabel.setAttribute("for", "gender");
mLabel.textContent = "Male:";

const minput = document.createElement("input");
minput.setAttribute("type", "radio");
minput.setAttribute("id", "Male");
minput.setAttribute("name", "gender");
minput.setAttribute("value", "Male");

const fLabel = document.createElement("label");
fLabel.setAttribute("for", "gender");
fLabel.textContent = "Female:";

const finput = document.createElement("input");
finput.setAttribute("type", "radio");
finput.setAttribute("id", "Female");
finput.setAttribute("name", "gender");
finput.setAttribute("value", "Female");

const genderContainer = document.createElement("div");
genderContainer.appendChild(genderLabel);
genderContainer.appendChild(mLabel);
genderContainer.appendChild(minput);
genderContainer.appendChild(fLabel);
genderContainer.appendChild(finput);

const choiceLabel = document.createElement("label");
choiceLabel.setAttribute("for", "foods");
choiceLabel.textContent = "Choice of Food:";

let foodItems = ["Vegnoodles", "Briyani", "Pizza", "Burger", "Shawarma"];

const FoodContainer = document.createElement("div");

foodItems.forEach((food) => {
  const label = document.createElement("label");
  label.setAttribute("for", food);
  label.textContent = food;

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("id", food);
  input.setAttribute("name", "food");
  input.setAttribute("value", food);
  FoodContainer.appendChild(label);
  FoodContainer.appendChild(input);
  //   FoodContainer.appendChild(document.createElement("br"));
});

const stateLabel = document.createElement("label");
stateLabel.setAttribute("for", "sname");
stateLabel.textContent = "State:";

const stateInput = document.createElement("input");
stateInput.setAttribute("type", "text");
stateInput.setAttribute("id", "sname");
stateInput.setAttribute("name", "statename");

const stateContainer = document.createElement("div");
stateContainer.appendChild(stateLabel);
stateContainer.appendChild(stateInput);

const countryLabel = document.createElement("label");
countryLabel.setAttribute("for", "cname");
countryLabel.textContent = "Country:";

const countryInput = document.createElement("input");
countryInput.setAttribute("type", "text");
countryInput.setAttribute("id", "cname");
countryInput.setAttribute("name", "countryname");

const countryContainer = document.createElement("div");
countryContainer.appendChild(countryLabel);
countryContainer.appendChild(countryInput);

/*********************************************************************************** */

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("id", "submit");
submitButton.setAttribute("class", "btn btn-primary");
submitButton.textContent = "Submit";
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const formData = {
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    address: document.getElementById("address").value,
    pincode: document.getElementById("pincode").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    food: [],
    state: document.getElementById("sname").value,
    country: document.getElementById("cname").value,
  };

  const foodInputs = document.querySelectorAll('input[name="food"]:checked');
  foodInputs.forEach(function (input) {
    formData.food.push(input.value);
  });

  const headings = [
    "First Name",
    "Last Name",
    "Address",
    "Pincode",
    "Gender",
    "Choice of Food",
    "State",
    "Country",
  ];

  const div = document.createElement("div");
  div.setAttribute("class", "table");
  const table = document.createElement("table");
  table.setAttribute("class", "table");
  const tablehead = document.createElement("thead");
  const tablebody = document.createElement("tbody");

  function renderHeading(data = []) {
    const headingNodes = [];
    for (let i = 0; i < data.length; i++) {
      const headingTag = document.createElement("td");
      const para = document.createElement("p");
      para.innerText = data[i];
      headingTag.appendChild(para);
      headingNodes.push(headingTag);
    }
    return headingNodes;
  }

  function renderRow(data = {}) {
    const tableRow = document.createElement("tr");
    const values = Object.values(data);
    for (let i = 0; i < values.length; i++) {
      const tableCell = document.createElement("td");
      tableCell.innerText = values[i];
      tableRow.append(tableCell);
    }
    return tableRow;
  }

  function renderRows(data = []) {
    let rows = [];
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        const item = renderRow(data[i]);
        rows.push(item);
      }
    }
    return rows;
  }

  tablehead.append(...renderHeading(headings));
  table.appendChild(tablehead);

  tablebody.append(...renderRows([formData]));

  table.appendChild(tablebody);
  div.appendChild(table);
  document.body.appendChild(div);

  document.getElementById("form").reset();
});

const buttonContainer = document.createElement("div");
buttonContainer.appendChild(submitButton);

const formContainer = document.getElementById("form");
formContainer.appendChild(firstNameContainer);
formContainer.appendChild(lastNameContainer);
formContainer.appendChild(addressContainer);
formContainer.appendChild(pincodeContainer);
formContainer.appendChild(genderContainer);
formContainer.appendChild(choiceLabel);
formContainer.appendChild(FoodContainer);
formContainer.appendChild(stateContainer);
formContainer.appendChild(countryContainer);
formContainer.appendChild(buttonContainer);

const parentContainer = document.getElementById("container");
parentContainer.appendChild(formContainer);
