import React, {useState} from "react"
import Modal from 'react-modal'

function BookCard(props) {
    const [modalIsOpen, setIsOpen] = useState(false)

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

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div>
            <div style={bookCardStyles}>
                <h3>{props.book.title}</h3>
                <img src={props.book.image} alt={props.book.title + 'cover image'}/>
                <p>By: {props.book.author[0]}</p>
                <button onClick={openModal}>Details</button>
            </div>
            <Modal isOpen={modalIsOpen}>
                <h2>{props.book.title}</h2>
                <p>{props.book.author[0]}</p>
                <img src={props.book.image} alt={props.book.title + 'cover image'}/>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>

    )
}

export default BookCard