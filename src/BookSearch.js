import {useState} from "react";

function BookSearch(props) {
    const [ searchResults, setSearchResults ] = useState('')
    return(
        <div>
            <input type="text" />
            <button onClick={getBookData}>Search</button>
        </div>
    )

    function getBookData() {

        fetch('https://www.googleapis.com/books/v1/volumes?q=clean+coder')
            .then(response => response.json())
            .then(data => {
                console.log(data.items[0].volumeInfo.title)
                // setSearchResults(data.items[0].volumeInfo)
            })
    }
}



export default BookSearch