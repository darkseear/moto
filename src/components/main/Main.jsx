import React from 'react'
import ContentBody from '../content_body/ContentBody'

function Main({ isLogin, setIsLogin }) {
    return (
        <main>
           <ContentBody isLogin={isLogin} setIsLogin={setIsLogin}/>
        </main>
    )
}

export default Main
