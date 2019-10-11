import React from 'react';
import BookList from './components/BookList.jsx';
import Navbar from './components/Navbar.jsx';
import ThemeToggle from './components/ThemeToggle';

import ThemeContextProvider from './context/themeContext.jsx';
import AuthContextProvider from './context/authContext.jsx';
import BookContextProvider from './context/bookContext.jsx';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
