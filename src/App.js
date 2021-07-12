import React from 'react'
import BookSearch from './BookSearch'

function App() {
    const appStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

  return (
    <div style={appStyles}>
        <h1>Book Search App</h1>
        <BookSearch />
    </div>
  );
}

export default App
