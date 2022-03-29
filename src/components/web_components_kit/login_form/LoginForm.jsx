import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../../redux/reducers/auth_reducer';

function LoginForm() {

    const [state, setState] = React.useState({email:'', password: ''});
    const { isLogged } = useSelector( state => state.auth )
    const dispatch = useDispatch()

    const SignIn = (e) => {
        e.preventDefault();
        console.log(state)
        dispatch(login(state))
    }

    const onChangeInput = (e) => {
        if(e.target.name === "password") setState({...state, password: e.target.value})
        if(e.target.name === "login") setState({...state, email: e.target.value})
    }

    return (
        <div className="login_form">
            <form onSubmit={ SignIn }>
                <div className="login-input_container">
                    <label htmlFor="login">Логин</label>
                    <input name="login" id="login" value={ state.login } onChange={ onChangeInput } required/>
                </div>
                <div className="password-input_container">
                    <label htmlFor="password">Пароль</label>
                    <input name="password" id="password" value={ state.password } onChange={ onChangeInput } required/>
                </div>
                <div className="password_forgot">
                    <a href="" >
                        Забыли пароль?
                    </a>
                </div>
                <div className="login_signIn">
                    <button  type="submit">Войти</button>
                </div>
                {/* <div className="login_registration">
                    <Link to={"/registration"}> 
                        <button type="button">Зарегистрироваться</button> 
                    </Link>
                </div> */}
            </form>
        </div>
    )
}

export default LoginForm
