import React from 'react'
import PageTitle from '../../web_components_kit/page_title/PageTitle'

function Contacts() {
    return (
        <div className="contacts_container">
            <PageTitle  title={"Контакты"} />
            <div className="contacts_body">

                <div className="contacts_phone">
                    <p className="bold_title" >Телефоны</p>
                    <br />
                    <a href="">+7 (4862) 78-27-88</a>
                    <a href="">+7 (962) 475-27-88</a>
                    <a href="">+7 (4862) 78-37-78</a>
                    <a href="">+7 (962) 475-37-78</a>
                </div>
                <br />
                <div className="contacts_email">
                    <p className="bold_title" >E-mail</p>
                    <br />
                    <a href="">orel-moto@bk.ru</a>
                </div>
                <br />
                <div className="contacts_adress">
                    <p className="bold_title" >Адрес</p>
                    <br />
                    <p>г. Орел, Московское шоссе, д.95</p>
                    <p>г. Орел, ул. МОПРа , д. 7</p>
                </div>
                <br />
                <div className="contacts_map">
                    <br />
                   <p>Вскорем времени появится карта</p>
                </div>
            </div>
        </div>
    )
}

export default Contacts
