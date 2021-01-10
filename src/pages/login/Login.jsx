import React from 'react';
import LoginImg from '../../img/panda.jpg'
import '../../style/pages/login/login.scss';
import '../../App.scss'
class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="base-container">
            <div className="content">
                <div className="image">
                    <img src={LoginImg}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username </label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password </label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="login-footer">
                <button type="button" className="login-btn">
                    Login
                </button>
            </div>
        </div>
    }
}


export default Login;