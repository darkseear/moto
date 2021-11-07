import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registrationUser } from '../../../redux/reducers/reg_reducer'

function RegistrationForm() {

    const [state, setState] = useState({ firstname:'', email:'', password: ''})

    const dispatch = useDispatch() 

    const onChangeInput = (e) => {
        if(e.target.name === "password") setState({...state, password: e.target.value})
        if(e.target.name === "login") setState({...state, email: e.target.value})
        if(e.target.name === "firstname") setState({...state, firstname: e.target.value})
        if(e.target.name === "lastname") setState({...state, lastname: e.target.value})
    }

    const RegistrationUser = (e) => {
        e.preventDefault();
        console.log(state)
        dispatch(registrationUser(state))
    }

    return (
        <div className="registration_form">
            <form onSubmit={ RegistrationUser }> 
                <div className="firstname-input_container">
                    <label htmlFor="firstname">Имя</label>
                    <input name="firstname" id="firstname" value={ state.firstname } onChange={ onChangeInput } required/>
                </div>
                <div className="lastname-input_container">
                    <label htmlFor="lastname">Фамилия</label>
                    <input name="lastname" id="lastname" value={ state.lastname } onChange={ onChangeInput } required/>
                </div>
                <div className="login-input_container">
                    <label htmlFor="login">E-mail</label>
                    <input name="login" id="login" value={ state.login } onChange={ onChangeInput } required/>
                </div>
                <div className="password-input_container">
                    <label htmlFor="password">Пароль</label>
                    <input name="password" id="password" value={ state.password } onChange={ onChangeInput } required/>
                </div>
                <br />
                <div className="login_signIn">
                    <button  type="submit">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm
