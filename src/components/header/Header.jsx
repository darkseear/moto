import React from 'react'
import { Link } from 'react-router-dom'

function Header({ isLogin }) {
    return (
        <header>
            <div className="header_top">
                <div className="left_infoblock">
                    <div className="left_infoblock-adress">
                        <div className="adress_infoblock-left_adress"></div>
                        <div>
                            <p>
                            г. Орёл, Московское шоссеб д.95 
                            </p>
                        </div>
                    </div>
                    <div className="left_infoblock-phone">
                    <div className="phone_number-oneLeft">
                            <div className="oneLeft_number-phone_phone"></div>
                            <div>
                                <p>
                                    +7(4862) 78-27-88
                                </p>
                            </div>
                        </div>
                        <div className="phone_number-twoLeft">
                            <div className="twoLeft_number-phone_phone"></div>
                            <div>
                                <p>
                                    +7(962) 475-27-88
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo_container">
                    <div className="site_logo"></div>
                </div>
                <div className="right_infoblock">
                    <div className="right_infoblock-adress">
                        <div className="adress_infoblock-right_adress"></div>
                        <div>
                            <p>
                                г. Орёл, ул. МОПРА, д.7
                            </p>
                        </div>
                    </div>
                    <div className="right_infoblock-phone">
                        <div className="phone_number-oneRight">
                            <div className="oneRight_number-phone_phone"></div>
                            <div>
                                <p>
                                    +7(4862) 78-27-88
                                </p>
                            </div>
                        </div>
                        <div className="phone_number-twoRight">
                            <div className="twoRight_number-phone_phone"></div>
                            <div>
                                <p>
                                    +7(962) 475-27-88
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_bottom">

                <div className="category_container">
                        <div className="left_categoryBlock">
                            <div className="title_category-left">
                            <Link to={"/"}> Главная</Link>
                            </div>
                            <div className="title_category-left">
                            <Link to={"/service"}> Сервис</Link>
                            </div>
                            <div className="title_category-left">
                            <Link to={"/museum"}> Наш музей</Link>
                            </div>
                        </div>
                        <div className="right_categoryBlock">
                            <div className="title_category-right">
                            <Link to={"/contacts"}> Контакты</Link>
                            </div>
                            <div className="title_category-right">
                                {isLogin ? 
                                    <Link to={"/login"}> Профиль</Link>
                                    :<Link to={"/login"}> Вход</Link>
                                }   
                            </div>
                            <div className="title_category-right">
                            <Link to={"/cart"}> Корзина</Link>
                            </div>
                        </div>
                </div>

            </div>
        </header>
    )
}

export default Header
