/*
   Buscando e contando dados em Arrays.

   Baseado no Array de livros por categoria abaixo, faça os seguintes desafios:
    
        - Contar o número de categorias e o número de livros em  cada categoria.
        - Contar o número de autores.
        - Mostrar livros de autor Auguto Cury.
        - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",

            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

// 1. Contar o número de categorias e o número de livros em  cada categoria!

const totalBooksByCategory = booksByCategory.length

for(let category of booksByCategory) {
    console.log(`Total de Livros da categoria ${category.category}: ${category.books.length}`)
}

// 2. Contar o número de autores!

function countAuthors() {
    let authors = []

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) === -1) {
                authors.push(book.author)
        }
    }
  }

  console.log(authors.length)

}

countAuthors()

// 3. Mostrar livros de autor Auguto Cury!

function booksOfAuthor(author) {
    let books = []

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
        }
    }
  }

  console.log(`Livros do autor ${author}: ${books.join(', ')}`)


}

booksOfAuthor('George S. Clason')

