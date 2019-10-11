import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext.jsx';
import { BookContext } from '../context/bookContext.jsx';


// class BookList extends Component {
//   static contextType = ThemeContext;   //single Context
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
//         <ul>
//           <li style={{ background: theme.ui }}>the way of kings</li>
//           <li style={{ background: theme.ui }}>the name of the wind</li>
//           <li style={{ background: theme.ui }}>the final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { books } = useContext(BookContext)

  const theme = isLightTheme ? light : dark;
  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
      <ul>
        {/* <li style={{ background: theme.ui }}>the way of kings</li>
        <li style={{ background: theme.ui }}>the name of the wind</li>
        <li style={{ background: theme.ui }}>the final empire</li> */}
        {
          books.map(book => {
            return(
              <li style={{ background: theme.ui }} key={book.id}>{book.title}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default BookList;