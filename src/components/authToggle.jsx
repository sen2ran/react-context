import React, { Component } from 'react';
import { AuthContext } from '../context/authContext.jsx';

class AuthToggle extends Component {
    static contextType = AuthContext;
    render() {
        const { toggleAuth } = this.context;
        return (<button onClick={toggleAuth}>Login</button>);
    }
}

export default AuthToggle;