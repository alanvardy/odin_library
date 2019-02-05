const box = document.querySelector("#box")
const button = document.querySelector("#new")
button.addEventListener("click", function() {
    let newBook = prompt('What is the title?')
    myLibrary.push(newBook)
    displayBooks()
})

let myLibrary = ['asdf', 'asdfea']

function Book(title) {
    self.title = title
}

function addBookToLibrary() {

}

function displayBooks() {
    let books = ''
    for (let index = 0; index < myLibrary.length; index++) {
        books += myLibrary[index];
        books += '<br>'
        box.innerHTML = books
    }
}

displayBooks()