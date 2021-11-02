import React from 'react'

function LoginForm({ isLogin , setIsLogin}) {

    let testVerification = { login:'login', password:'12345678' };

    const [state, setState] = React.useState({login:'', password: ''});

    const SignIn = (e) => {
        e.preventDefault();
        console.log(state)
       
        if( testVerification.login === state.login && testVerification.password ) setIsLogin(true)
    }

    const onChangeInput = (e) => {
        if(e.target.name === "password") setState({...state, password: e.target.value})
        if(e.target.name === "login") setState({...state, login: e.target.value})
    }

    return (
        <div className="login_form">
            <form onSubmit={ SignIn }>
                <div className="login-input_container">
                    <label htmlFor="login">Логин</label>
                    <input name="login" id="login" value={ state.login } onChange={ onChangeInput }/>
                </div>
                <div className="password-input_container">
                    <label htmlFor="password">Пароль</label>
                    <input name="password" id="password" value={ state.password } onChange={ onChangeInput }/>
                </div>
                <div className="password_forgot">
                    <a href="" >
                        Забыли пароль?
                    </a>
                </div>
                <div className="login_signIn">
                    <button  type="submit">Войти</button>
                </div>
                <div className="login_registration">
                    <button type="button">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
