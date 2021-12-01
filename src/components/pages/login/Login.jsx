import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/reducers/auth_reducer'
import LoginForm from '../../web_components_kit/login_form/LoginForm'
import PageTitle from '../../web_components_kit/page_title/PageTitle'

function Login() {

    const [state, setState] = React.useState()
    const { isLogged } = useSelector( state => state.auth )

    const dispatch = useDispatch()

    const logoutButton = () => {
        dispatch(logout())
    }

    return (
        <div className="login_container ">
            <PageTitle  title={isLogged ? "Профиль" : "Вход"} />   
            <div className="container-login_loginForm __container">
                {
                    !isLogged ? <LoginForm /> 
                    :
                    // <div onClick={ logoutButton }> 
                    //     LOGOUT
                    // </div>
                    <div>
                        
                    </div>
                }
            </div>

        </div>
    )
}

export default Login
