import React from "react"

function BookCard(props) {
    return (
        <div>
            <h3>{props.book.title}</h3>
        </div>
    )
}

export default BookCard