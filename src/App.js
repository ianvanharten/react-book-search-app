import React, { useState } from 'react'
import Header from './Header'
import BookSearch from './BookSearch'

function App() {
    const appStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

  return (
    <div style={appStyles}>
        <Header />
        <BookSearch />
    </div>
  );
}

export default App
