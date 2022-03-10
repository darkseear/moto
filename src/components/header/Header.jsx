import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

function Header() {

    const { isLogged } = useSelector( state => state.auth )

    return (
        <header>
            <div className="header_top">
                <div className="left_infoblock">
                    <div className="left_infoblock-adress">
                        <div className="adress_infoblock-left_adress"></div>
                        <div>
                            <p>
                            <a href="https://yandex.ru/maps/10/orel/?from=api-maps&amp;ll=36.129317%2C52.996717&amp;origin=jsapi_2_1_75&amp;pt=%2036.128489%2C52.994166~%2036.066433%2C52.948022&amp;z=11.8">г. Орёл, Московское шоссе д.95 </a>
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
                               <a href="https://yandex.ru/maps/10/orel/?from=api-maps&amp;ll=36.129317%2C52.996717&amp;origin=jsapi_2_1_75&amp;pt=%2036.128489%2C52.994166~%2036.066433%2C52.948022&amp;z=11.8">г. Орёл, ул. МОПРА, д.7</a> 
                            </p>
                        </div>
                    </div>
                    <div className="right_infoblock-phone">
                        <div className="phone_number-oneRight">
                            <div className="oneRight_number-phone_phone"></div>
                            <div>
                                <p>
                                    +7 (4862) 78-37-78
                                </p>
                            </div>
                        </div>
                        <div className="phone_number-twoRight">
                            <div className="twoRight_number-phone_phone"></div>
                            <div>
                                <p>
                                    +7 (962) 475-37-78
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
                            <NavLink activeClassName="navigation_active" exact to={"/"}> Главная</NavLink>
                            </div>
                            <div className="title_category-left">
                            <NavLink activeClassName="navigation_active" to={"/service"}> Сервис</NavLink>
                            </div>
                            <div className="title_category-left">
                            <NavLink activeClassName="navigation_active" to={"/museum"}> Наш музей</NavLink>
                            </div>
                        </div>
                        <div className="right_categoryBlock">
                            <div className="title_category-right">
                            <NavLink activeClassName="navigation_active" to={"/contacts"}> Контакты</NavLink>
                            </div>
                            <div className="title_category-right">
                                {isLogged ? 
                                    <NavLink activeClassName="navigation_active" to={"/login"}> Профиль</NavLink>
                                    :<NavLink activeClassName="navigation_active" to={"/login"}> Вход</NavLink>
                                }   
                            </div>
                            <div className="title_category-right">
                            <NavLink activeClassName="navigation_active" to={"/cart"}> Корзина</NavLink>
                            </div>
                        </div>
                </div>
            </div>
        </header>
    )
}

export default Header
