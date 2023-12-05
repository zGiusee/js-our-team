// CREO L'ARRAY CON GLI OGGETTI FORNITI IN QUESTO CASO I DIPENDENTI

let employees = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },   
]

console.log(employees);

// CREO IL CICLO FOR CHE MI PERMETTA DI STAMPARE TUTTE LE INFORMAZIONI DEI DIPENDENTI

// Dichiaro la variabile del container principale delle card
let employees_display = document.getElementById('employees_container');

for(let i = 0; i<employees.length ; i++){

    // Creo il div contenitore
    let div = document.createElement('div');
    div.classList.add('col-4', 'p-3', 'text-white');

    // Dichiaro la variabile del contenuto: immagine
    let cardImg = document.createElement('div');
    cardImg.innerHTML = `<img src='../js-our-team/img/${employees[i].image}'>`;

    // Dichiaro la variabile del contenuto: nome
    let cardName = document.createElement('div');
    cardName.classList.add('mt-3')
    cardName.innerHTML = `<h3>${employees[i].name}</h3>`;

    // Dichiaro la variabile del contenuto: ruolo
    let cardRole = document.createElement('div');
    cardRole.innerHTML = `<h4>${employees[i].role}</h4>`;

    // APPENDO I CONTENUTI AL DIV CONTENITORE
    div.appendChild(cardImg);
    div.appendChild(cardName);
    div.appendChild(cardRole);

    // APPENDO IL DIV CONTENITORE ALL CONTAINER DELLE CARD
    employees_display.appendChild(div);
}
