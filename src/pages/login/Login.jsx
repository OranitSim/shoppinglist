import React from 'react';
import LoginImg from '../../img/bearwithcoffe.jpg'
import './login.scss'
class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="base-container">
            <div className="header"> Login</div>
            <div className="content">
                <div className="image">
                    <img src={LoginImg}/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">User name </label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password </label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Login
                </button>
            </div>
        </div>
    }
}

//         if (UserStore.loading) {
//             return (
//                 <div className = "login">
//                     <div className = 'container'>
//                         loading, please wait...
//                     </div>
//                 </div>
//             )
//         }
//         else {

//             if ( UserStore.isLoggedIn) {
                
//                 return (
//                     <div className = "login">
//                         <div className = 'container'>
//                             welacome {UserStore.username}
//                             <SubmitButton
//                             text = {'log out'}
//                             disabled = {false} 
//                             onClick = { () => this.doLogout() }
//                             />

//                         </div> 
//                     </div>
//                 )


//             }
//         }


//         return (
//             <div className = "login">
//                 <div className = 'container'>
//                         <SubmitButton
//                             text = {'log in'}
//                             disabled = {true} 
//                             onClick = { () => this.doLogout() }
//                          />

//                     <LoginForm />
                
//                 </div>
//             </div>
//         );
//     }
// }
export default Login;