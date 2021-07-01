import React, { useState } from 'react'
import Header from './Header'
import BookSearch from './BookSearch'

function App() {
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

  return (
    <div style={styles}>
        <Header />
        <BookSearch />
    </div>
  );
}

export default App
