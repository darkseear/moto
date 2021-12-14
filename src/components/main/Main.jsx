import React from 'react'
import ContentBody from '../content_body/ContentBody'
import Categories from '../web_components_kit/categories/Categories'
import CategoriesTop from '../web_components_kit/categories/CategoriesTop'
import GoBackNext from '../web_components_kit/goBack/GoBackNext'

function Main({ isLogin, setIsLogin }) {
    return (
        <main>
            <CategoriesTop />
           <ContentBody isLogin={isLogin} setIsLogin={setIsLogin}/>
        </main>
    )
}

export default Main
