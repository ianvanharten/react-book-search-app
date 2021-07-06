import React from "react"

function BookCard(props) {
    const bookCardStyles = {
        width: '300px',
        height: '300px',
        margin: '20px',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    }

    return (
        <div style={bookCardStyles}>
            <h3>{props.book.title}</h3>
            <img src={props.book.image} alt={props.book.title}/>
            <p>By: {props.book.author[0]}</p>
        </div>
    )
}

export default BookCard