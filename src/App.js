import React, { useState } from 'react'
import Header from './Header'
import BookSearch from './BookSearch'

function App() {
    const [ searchResults, setSearchResults ] = useState('')
  return (
    <div>
        <Header />
        <BookSearch onClick={getBookData}/>
    </div>
  );
}

function getBookData() {

    fetch('https://www.googleapis.com/books/v1/volumes?q=clean+coder')
        .then(response => response.json())
        .then(data => {
            console.log(data.items[0].volumeInfo)
            // setResult(data.items[0].volumeInfo)
        })
}

export default App
