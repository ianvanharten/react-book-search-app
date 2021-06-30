import React, {useState} from "react";
import BookCard from "./BookCard";

// TODO: get search query, onChange method to save in state
function BookSearch() {
    const [ books, setBooks ] = useState(['History Book', 'Philosophy Book'])
    return(
        <div>
            <input type="text" />
            <button onClick={getBookData}>Search</button>
            {books.map((book) => {
                return <BookCard book={book} />
            })}
        </div>
    )

    function getBookData() {
        fetch('https://www.googleapis.com/books/v1/volumes?q=clean+coder')
            .then(response => response.json())
            .then(data => {
                // console.log(data.items[0].volumeInfo.title)
                setBooks(data.items[0].volumeInfo.title)
                console.log(books[0])
            })
    }
}

export default BookSearch