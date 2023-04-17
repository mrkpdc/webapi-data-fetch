const url = "https://jsonplaceholder.typicode.com/users";
const contenuto = document.querySelector("#contenuto");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    data.forEach((element) => createCard(element));
    // createAllCards(data);
  });

function createCard(element) {
  const column = document.createElement("div");
  column.className = "col-lg-3 p-2";
  contenuto.appendChild(column);

  const card = document.createElement("div");
  card.className = "card bg-light";
  column.appendChild(card);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.innerText = element.name;
  cardBody.appendChild(cardTitle);

  const email = document.createElement("p");
  email.className = "card-text text-secondary fw-bold";
  email.innerText = element.email;
  cardBody.appendChild(email);

  const street = document.createElement("div");
  street.className = "card-text";
  street.innerHTML = `<b>Street:</b> ${element.address.street}`;
  cardBody.appendChild(street);

  const suite = document.createElement("div");
  suite.className = "card-text";
  suite.innerHTML = `<b>Suite:</b> ${element.address.suite}`;
  cardBody.appendChild(suite);

  const city = document.createElement("div");
  city.className = "card-text";
  city.innerHTML = `<b>City:</b> ${element.address.city}`;
  cardBody.appendChild(city);

  const buttonRow = document.createElement("div");
  buttonRow.className = "d-flex flex-row justify-content-end pt-3";
  cardBody.appendChild(buttonRow);

  const buttonDetails = document.createElement("button");
  buttonDetails.innerText = "Dettagli";
  buttonDetails.className = "btn btn-primary";
  buttonDetails.type = "button";
  buttonDetails.setAttribute("data-bs-toggle", "collapse");
  let elementId = `#id${element.id}`;
  buttonDetails.setAttribute("data-bs-target", elementId);
  buttonRow.appendChild(buttonDetails);

  const collapsibleDiv = document.createElement("div");
  collapsibleDiv.className = "collapse";
  collapsibleDiv.id = `id${element.id}`;
  cardBody.appendChild(collapsibleDiv);

  // questo div è per evitare lo scattino alla chiusura
  const details = document.createElement("div");
  details.className = "pt-3";
  collapsibleDiv.appendChild(details);

  const companyName = document.createElement("div");
  companyName.className = "card-text";
  companyName.innerHTML = `<b>Company:</b> ${element.company.name}`;
  details.appendChild(companyName);

  const companyPhone = document.createElement("div");
  companyPhone.className = "card-text";
  companyPhone.innerHTML = `<b>Phone:</b> ${element.company.phone}`;
  details.appendChild(companyPhone);

  const website = document.createElement("div");
  website.className = "card-text";
  website.innerHTML = `<b>Website:</b> ${element.website}`;
  details.appendChild(website);
}

function createAllCards(data) {
  data.forEach(
    (element) =>
      (contenuto.innerHTML += `
          <div class="col-lg-3 p-2">
              <div class="card bg-light">
                  <div class="card-body">
                      <h5 class="card-title"><b>${element.name}</b></h5>
                      <p class="card-text text-secondary"><b>${element.email}</b></p>
                      <div class="card-text"><b>Street: </b>${element.address.street}</div>
                      <div class="card-text"><b>Suite: </b>${element.address.suite}</div>
                      <div class="card-text"><b>City: </b>${element.address.city}</div>
                      <div class="d-flex flex-row justify-content-end pt-3">
                          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#id${element.id}">
                              Dettagli
                          </button>
                      </div>
                      <div class="collapse" id="id${element.id}">
                          <div class="pt-3"> <!-- questo div è per evitare lo scattino alla chiusura -->
                              <div class="card-text"><b>Company: </b>${element.company.name}</div>
                              <div class="card-text"><b>Phone: </b>${element.company.phone}</div>
                              <div class="card-text"><b>Website: </b>${element.website}</div>
                          </div>
                      </div>
    
                  </div>
              </div>
          </div>
          `)
  );
}
