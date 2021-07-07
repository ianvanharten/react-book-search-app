import React, { useState, useRef } from "react"
import BookCard from "./BookCard"

function BookSearch() {
    const [ books, setBooks ] = useState([])
    const bookSearchRef = useRef()

    const bookSearchStyles = {
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    const bookResultsStyles = {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }

    return(
        <div style={bookSearchStyles}>
            <div>
                <input ref={bookSearchRef} type="text" />
                <button onClick={getBookData}>Search</button>
            </div>

            <div style={bookResultsStyles}>
                {books.map((book) => {
                    return <BookCard key={book.id} book={book} />
                })}
            </div>
        </div>
    )

    function getBookData() {
        const searchQuery = bookSearchRef.current.value
        const results = []
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.items)
                data.items.forEach((item) => {
                    // create a book object with title, author, description, image
                    let book = {
                        id: item.id,
                        title: item.volumeInfo.title,
                        author: item.volumeInfo.authors,
                        description: item.volumeInfo.description,
                        categories: item.volumeInfo.categories,
                        publishedDate: item.volumeInfo.publishedDate,
                        image: item.volumeInfo.imageLinks.thumbnail
                    }
                    console.log(book)
                    results.push(book)
                })
            })
            .then(() => setBooks(results))
    }
}

export default BookSearch