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

for(let i = 0; i<employees.length ; i++){

    console.log(employees[i])
}
