import React from 'react'
import LoginForm from '../../web_components_kit/login_form/LoginForm'

function Login({ isLogin, setIsLogin }) {

    const [state, setState] = React.useState()

    return (
        <div className="login_container">

            {
                !isLogin ? <LoginForm setIsLogin={ setIsLogin } /> : "Profile"
            }
            
        </div>
    )
}

export default Login
