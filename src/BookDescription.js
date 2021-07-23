import React, {useState} from "react"

function BookDescription(props) {
    const [description, setDescription] = useState(props.description.substr(0, 500))

    function changeDescriptionLength() {
        description.length < 501
            ? setDescription(props.description)
            : setDescription(props.description.substr(0, 500))
    }

    if (props.description.length < 501) {
        return (
            <div>
                <p className='subtitle'>Description</p>
                <p className='descriptionStyles'>{description}</p>
            </div>
        )
    }

    return(
        <div>
            <p className='subtitle'>Description</p>
            <p className='descriptionStyles'>{description}{description.length < 501 && <span>...</span>}</p>
            {description.length < 501
                ? <button onClick={changeDescriptionLength}>See more</button>
                : <button onClick={changeDescriptionLength}>See Less</button>}
        </div>
    )
}

export default BookDescription