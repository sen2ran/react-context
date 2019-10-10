import React from 'react';
import BookList from './components/BookList.jsx';
import Navbar from './components/Navbar.jsx';
import ThemeToggle from './components/ThemeToggle';
import AuthToggle from './components/authToggle';

import ThemeContextProvider from './context/themeContext.jsx';
import AuthContextProvider from './context/authContext.jsx';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
          <AuthToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
