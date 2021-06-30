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
                return <BookCard key={book} book={book} />
            })}
        </div>
    )

    function getBookData() {
        const results = []
        fetch('https://www.googleapis.com/books/v1/volumes?q=clean+coder')
            .then(response => response.json())
            .then(data => {
                data.items.forEach((item) => {
                    results.push(item.volumeInfo.title)
                })
            })
            .then(() => setBooks(results))
    }
}

export default BookSearch