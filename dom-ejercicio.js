
const CARDS_CONTAINER1 = document.getElementById("card-container"); //.querySelector en caso de no poder con getElementById (. o #)
const USER = {
    id: 1,
    username: 'User name',
    desc: 'Sobre mi',
    age: 26,
    fav_books: {
        books: [
            'Ensayo sobre la ceguera',
             'El principito',
            'Angeles y Demonios',
         ],
    },
}

//crear secciones
const card = document.createElement("div"); //hacer un div en js- se declara pero no se implementa
const name_section = document.createElement("h3");
const desc_section = document.createElement("p");
const age_section = document.createElement("p");
const book_section = document.createElement("div");
//lista------------------------------------------
const bookList = USER.fav_books.books.map((e) => {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});
console.log(bookList)
//map regresa un array que contiene los datos que le indicamos

//Crear tarjeta e inyectamos info
name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
book_section.append(...bookList);
card.append(name_section, desc_section, age_section, book_section);

//inyectar tarjeta en el container
CARDS_CONTAINER.appendChild(card);


//crear funciones reutilizables 
//crear funciones para crear items, inyectar texto, funciones para renderizar 
//multiples usuarios
// const cardcontainer la mantenmos 

const CARDS_CONTAINER = CARDS_CONTAINER = document.querySelector("#card-container"); 
const USERS = [
    {
        id: 1,
        username: "booklover",
        desc: "Avid reader and coffe enthusiast",
        age: 29,
        fav_books: {
            books: [
                "1984",
                "Pride and Prejudice",
                "to kill a mockingbird",
             ],
    
        },
    },
    
    {
        id: 2,
        username: "literature_lover",
        desc: "amateur writer and poetry lover",
        age: 35,
        fav_books: {
            books: [
                "The Great Gatsby",
                "Beloved",
                "Invisible Man",
             ],
    
        },
    },
    ];

 function createElements () {
    const cardObj = {
        name_section: document.createElement("h3"),
        desc_section: document.createElement("p"),
        age_section: document.createElement("p"),
        book_section: document.createElement("div"),

    };
    return cardObj;
 }

 function injectData (obj,user) {
    const bookList = user.fav_books.books.map((e) => {
        const item = document.createElement("ul");
        item.textContent = e;
        return item;
 });
    obj.name_section.textContent = user.username;
    obj.desc_section.textContent = user.desc;
    obj.age_section.textContent = user.age;
    obj.book_section.append(...bookList);
    renderCard(obj);
 }

 function renderCard(cardObj) {
    const card = document.createElement("div");
    card.append(
        cardObj.name_section,
        cardObj.desc_section,
        cardObj.age_section,
        cardObj.book_section,

    );
    CARDS_CONTAINER.appendChild(card);
 }

 USERS.forEach((user) => {
    const cardData = createElements();
    injectData(cardData, user);
 });

