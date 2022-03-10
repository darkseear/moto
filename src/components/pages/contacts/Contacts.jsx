import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import PageTitle from '../../web_components_kit/page_title/PageTitle'

function Contacts() {
    return (
        <div className="contacts_container">
            <PageTitle title={"Контакты"} />
            <div className="contacts_body __container">

                <div className="contacts_phone">
                    <p className="bold_title" >Магазины</p>
                    <br />
                    <p>г. Орел, Московское шоссе, д.95</p>
                    <br />
                    <a href="">+7 (4862) 78-27-88</a>
                    <a href="">+7 (962) 475-27-88</a>
                    <br />
                    <p>г. Орел, ул. МОПРа , д. 7</p>
                    <br />
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
                {/* <div className="contacts_adress">
                    <p className="bold_title" >Адрес</p>
                    <br />
                    <p>г. Орел, Московское шоссе, д.95</p>
                    <p>г. Орел, ул. МОПРа , д. 7</p>
                </div> */}
                <br />
                <div className="contacts_map">
                    <YMaps
                        query={{
                            ns: 'use-load-option',
                            load:
                                'Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon',
                        }}
                    >
                        <Map 
                            width="700px" height="600px"
                            defaultState={{
                                center: [52.994166, 36.128489],
                                zoom: 12, 
                                controls: ['zoomControl', 'fullscreenControl'],
                            }}
                        >
                            <Placemark
                               modules={['geoObject.addon.balloon']}
                                defaultGeometry={[52.994166, 36.128489]}
                                properties={{
                                    balloonContentBody:
                                        "г.Орел, Московское шоссе, д.95 <br> Магазин-музей ретро-техники тел.:8(4862)78-27-88; 8-962-475-27-88",
                                }}
                            />
                            <Placemark
                                defaultGeometry={[52.948022, 36.066433]}
                                properties={{
                                    balloonContentBody:
                                        "г.Орел, ул.МОПРа, д.7 <br> Магазин-сервис тел.:8(4862)78-37-78; 8-962-475-37-78",
                                }}
                            />
                        </Map>
                    </YMaps>
                </div>
            </div>
        </div>
    )
}

export default Contacts
