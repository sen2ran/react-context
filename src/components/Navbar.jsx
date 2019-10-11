import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext.jsx';
import { AuthContext } from '../context/authContext';


// class Navbar extends Component {
//   static contextType = ThemeContext;
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(authContext) => (
//           <ThemeContext.Consumer>
//             {(themeContext) => {
//               const { isLightTheme, light, dark } = themeContext;
//               const { isAuthenticated, toggleAuth } = authContext;
//               const theme = isLightTheme ? light : dark;
//               return (
//                 <nav style={{ background: theme.ui, color: theme.syntax }}>
//                   <h1>Context App</h1>
//                   <div onClick={toggleAuth}>{
//                     isAuthenticated ? 'Logged In' : "Logged out"
//                   }</div>
//                   <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                   </ul>
//                 </nav>
//               )
//             }}
//           </ThemeContext.Consumer>
//         )}
//       </AuthContext.Consumer>
//     );
//   }
// }

const Navbar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const { isAuthenticated, toggleAuth } = useContext(AuthContext)
  const theme = isLightTheme ? light : dark;
  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>{
        isAuthenticated ? 'Logged In' : "Logged out"
      }</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
export default Navbar;