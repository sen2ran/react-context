import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContext from './AppContext.jsx';
// import AppHooks from './AppHooks';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppContext />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
