function BookSearch(props) {
    return(
        <div>
            <input type="text" />
            <button onClick={props.onClick}>Search</button>
        </div>
    )
}

export default BookSearch