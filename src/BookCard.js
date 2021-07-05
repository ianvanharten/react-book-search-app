import React from "react"

function BookCard(props) {
    const bookCardStyles = {
        width: '300px',
        margin: '10px',
        padding: '20px',
        border: '1px solid black'
    }

    return (
        <div style={bookCardStyles}>
            <h3>{props.book.title}</h3>
            <p>By: {props.book.author[0]}</p>
        </div>
    )
}

export default BookCard