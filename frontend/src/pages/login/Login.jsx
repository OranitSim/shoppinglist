import React from 'react';
import LoginImg from '../../img/panda.jpg'
import '../../style/pages/login/login.scss';
import '../../style/App.scss';
import background from '../../img/ocean.jpg'

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="base-container" >
                    <div className="content">
                        <img className="img-login" src={LoginImg}/>
                        <h1> welcome to my project</h1>
                        <div className="form">
                            <div className="form-group">
                                <label className="label-login" htmlFor="username">Username </label>
                                <input className="input-login" type="text" name="username" placeholder="username"/>
                            </div>
                            <div className="form-group">
                                <label className="label-login" htmlFor="password">Password </label>
                                <input className="input-login" type="password" name="password" placeholder="password"/>
                            </div>
                        </div>
                        <div className="login-footer">
                            <button type="button" className="login-btn">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
        
    }
}


export default Login;