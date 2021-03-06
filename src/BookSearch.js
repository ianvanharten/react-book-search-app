import React, {useState, useRef} from "react"
import BookCard from "./BookCard"

function BookSearch() {
    const [books, setBooks] = useState([])
    const bookSearchRef = useRef()

    return (
        <div className='bookSearchStyles'>
            <div className='bookSearchForm m-2'>
                <input className='input m-2' ref={bookSearchRef} type="text" onKeyPress={(e) => handleKeyPress(e)}/>
                <button
                    className='button is-success m-2'
                    onClick={getBookData}>
                    Search
                </button>
            </div>

            <div className='bookResultsStyles'>
                {books.map((book) => {
                    return <BookCard key={book.id} book={book}/>
                })}
            </div>
        </div>
    )

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            getBookData()
        }
    }

    function getBookData() {
        const searchQuery = bookSearchRef.current.value
        const results = []
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                if (data.items) {
                    data.items.forEach((item) => {
                        if (item.hasOwnProperty('id')
                            && item.volumeInfo.hasOwnProperty('title')
                            && item.volumeInfo.hasOwnProperty('authors')
                            && item.volumeInfo.hasOwnProperty('description')
                            && item.volumeInfo.hasOwnProperty('categories')
                            && item.volumeInfo.hasOwnProperty('publishedDate')
                            && item.volumeInfo.hasOwnProperty('pageCount')
                            && item.volumeInfo.hasOwnProperty('imageLinks')) {
                            let book = {
                                id: item.id,
                                title: item.volumeInfo.title,
                                author: item.volumeInfo.authors,
                                description: item.volumeInfo.description,
                                categories: item.volumeInfo.categories,
                                publishedDate: new Date(item.volumeInfo.publishedDate).getFullYear(),
                                pageCount: item.volumeInfo.pageCount,
                                image: item.volumeInfo.imageLinks.thumbnail
                            }
                            results.push(book)
                        }
                    })
                }
            })
            .then(() => setBooks(results))
    }
}

export default BookSearch