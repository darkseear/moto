import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/reducers/auth_reducer'
import CreateProduct from '../../web_components_kit/create_product/CreateProduct'
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
            
                {
                    !isLogged ?
                        <div className="container-login_loginForm __container">
                            <LoginForm />
                        </div>
                    :
                    // <div onClick={ logoutButton }> 
                    //     LOGOUT
                    // </div>
                    <div>
                        <CreateProduct/>
                    </div>
                }
        </div>
    )
}

export default Login
