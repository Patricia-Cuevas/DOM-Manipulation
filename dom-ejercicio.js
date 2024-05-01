//Ejercicio sobre DOM con multiples usuarios
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

