const url = "https://jsonplaceholder.typicode.com/users"
const contenuto = document.querySelector('#contenuto');

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data);
    ListaUtenti(data);
});

// main function
function ListaUtenti (data) {
    data.forEach(element =>
        contenuto.innerHTML += `
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
        `
        );
}