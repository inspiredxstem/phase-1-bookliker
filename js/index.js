let bookList = document.getElementById("list")
let bookPanel = document.querySelector("div#show-panel")

document.addEventListener("DOMContentLoaded", function() {
});

const fetchBooks = () => {
    return fetch("http://localhost:3000/books")
    .then(res => res.json())
}

const renderBooks = (book) => {
    let books = document.createElement("li")
    books.textContent = book.title

    books.addEventListener("click", () => {
        booksDetails(book)
    })

    bookList.append(books)
}

const booksDetails = (book) => {
    let bookTitle = document.createElement("h2")
    bookTitle.textContent = book.title
    let bookSubtitle = document.createElement("h2")
    bookSubtitle.textContent = book.subtitle
    let bookImg = document.createElement("img")
    bookImg.src = book.img_url
    let bookSummary = document.createElement("p")
    bookSummary.textContent = book.description
    let bookUsers = document.createElement("li")
    book.users.forEach(user => {
    })

    let button = document.createElement('button')
    button.textContent = 'LIKE'

    button.addEventListener("click", (event) => {
        event.preventDefault();
        let liker = [{id :"11", username: "Steven"}]
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                users : liker
            })
        })
        .then(response => response.json())
        .then(data => data)
    })

    //removes previous book child node from book panel display
    removePreviousChildNodes(bookPanel)
    bookPanel.append(bookImg, bookTitle, bookSubtitle, bookSummary, bookUsers, button)
}


//Looping to remove every last child
// checks the first child 
const removePreviousChildNodes = (parent) => {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

fetchBooks().then(data => {
    data.forEach(book => {
        renderBooks(book)
    })
})
