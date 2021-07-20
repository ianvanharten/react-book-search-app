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
            border: '3px solid rgb(204, 204, 204)',
            background: 'rgb(255, 255, 255)',
            overflow: 'auto',
            borderRadius: '4px',
            outline: 'none',
            padding: '40px',
            width: '50%',
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
            <div className='bookCardStyles has-background-white'>
                <h3 className='title is-4 is-centered'>{props.book.title}</h3>
                <img src={props.book.image} alt={props.book.title + 'cover image'}/>
                <p className='subtitle'>By: {props.book.author[0]}</p>
                <button className='button is-link is-light' onClick={openModal}>Details</button>
            </div>
            <Modal isOpen={modalIsOpen}>
                <h2 className='title'>{props.book.title}</h2>
                <p className='subtitle'>By {props.book.author[0]}</p>
                <p className='subtitle'>{props.book.publishedDate}</p>
                <img src={props.book.image} alt={props.book.title + 'cover image'}/>
                <p className='mt-3'>{props.book.pageCount} pages</p>
                <div className='content has-background-white-ter m-5 p-5'>
                    <p className='subtitle'>Description</p>
                    <p className='descriptionStyles'>{props.book.description}</p>
                </div>
                <button className='button is-dark' onClick={closeModal}>Close</button>
            </Modal>
        </div>
    )
}

export default BookCard