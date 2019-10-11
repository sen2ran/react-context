import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBook] = useState([
        { title: 'The way of kings', id: 1 },
        { title: 'The name of the wind', id: 2 },
        { title: 'The final empire', id: 3 },
        { title: 'The King', id: 4 },
    ]);
    return (
        <BookContext.Provider value={{ books }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;