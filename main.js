const box = document.querySelector('#box')
const button = document.querySelector('#new')
const buttons = []
button.addEventListener('click', function () {
  let newBook = prompt('What is the title?')
  myLibrary.push(newBook)
  displayBooks()
})

let myLibrary = []

function Book (title) {
  self.title = title
}

function addBookToLibrary () {

}

function displayBooks () {
  let books = ''
  for (let index = 0; index < myLibrary.length; index++) {
    books += `<p> ${myLibrary[index]}<button id="b${index}">Delete</button></p>`
  }
  box.innerHTML = books
  for (let index = 0; index < myLibrary.length; index++) {
    buttons.push(document.querySelector(`#b${index}`))
    buttons[buttons.length - 1].addEventListener('click', function () {
      myLibrary.splice(index, 1)
      displayBooks()
    })
  }
}

displayBooks()
