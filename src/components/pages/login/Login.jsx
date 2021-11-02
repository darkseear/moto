import React from 'react'
import LoginForm from '../../web_components_kit/login_form/LoginForm'
import PageTitle from '../../web_components_kit/page_title/PageTitle'

function Login({ isLogin, setIsLogin }) {

    const [state, setState] = React.useState()

    return (
        <div className="login_container">
            <PageTitle  title={isLogin ? "Профиль" :"Вход"} />   
            <div className="container-login_loginForm">
                {
                    !isLogin ? <LoginForm setIsLogin={ setIsLogin } /> : "Profile"
                }
            </div>
        </div>
    )
}

export default Login
