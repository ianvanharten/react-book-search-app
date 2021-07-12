import React, {useState} from "react"
import Modal from 'react-modal'

function BookCard(props) {
    const [modalIsOpen, setIsOpen] = useState(false)

    Modal.defaultStyles = {
        overlay: {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(255, 255, 255, 0.75)'
        },
        content: {
            position: 'absolute',
            inset: '40px',
            border: '1px solid rgb(204, 204, 204)',
            background: 'rgb(255, 255, 255)',
            overflow: 'auto',
            borderRadius: '4px',
            outline: 'none',
            padding: '40px',
            width: '70%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    }

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div>
            <div className='bookCardStyles'>
                <h3>{props.book.title}</h3>
                <img src={props.book.image} alt={props.book.title + 'cover image'}/>
                <p>By: {props.book.author[0]}</p>
                <button onClick={openModal}>Details</button>
            </div>
            <Modal isOpen={modalIsOpen}>
                <h2>{props.book.title}</h2>
                <img src={props.book.image} alt={props.book.title + 'cover image'} style={{width: '12%'}}/>
                <p>{props.book.author[0]}</p>
                <p className='descriptionStyles'>{props.book.description}</p>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    )
}

export default BookCard