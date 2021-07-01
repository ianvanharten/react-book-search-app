import React, { useState, useRef } from "react";
import BookCard from "./BookCard";

// TODO: get search query, onChange method to save in state
function BookSearch() {
    const [ books, setBooks ] = useState([])
    const bookSearchRef = useRef()
    return(
        <div>
            <input ref={bookSearchRef} type="text" />
            <button onClick={getBookData}>Search</button>
            {books.map((book) => {
                return <BookCard key={book.id} book={book} />
            })}
        </div>
    )

    function getBookData() {
        const results = []
        fetch('https://www.googleapis.com/books/v1/volumes?q=clean+coder')
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