import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import GoBackNext from '../../web_components_kit/goBack/GoBackNext'
import PageTitle from '../../web_components_kit/page_title/PageTitle'
import RegistrationForm from '../../web_components_kit/registration_form/RegistrationForm'

function Registration() {

    const history = useHistory()

    const { isLogged } = useSelector( state => state.auth )

    if(isLogged) {
       
        return <Redirect to={"/login"}/>
    }

    return (
        <>
        <div className="registration_container __container">
            <PageTitle  title={"Регистрация"} />   
            <div className="container-registration_registrationForm">
                <RegistrationForm />
            </div>
        </div>
        <GoBackNext/>
        </>
    )
}

export default Registration
