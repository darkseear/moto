import React from 'react'

function Footer() {
    return (
        <footer>
             <div className="footer__title-shop">
                 <div className="title-footer__title">
                     <p>
                     Торгово-сервисный центр
                     </p>
                 </div>
                 <div className="title-footer__yahr">
                    <p>
                        © 2020 - 2021 ОРЁЛ-МОТО
                    </p>
                 </div>
                 <div className="title-footer__socnetwork">
                     <div style={{ width:'40px', height:'40px' , background: 'white'}}></div>
                     <div style={{ width:'40px', height:'40px' , background: 'white'}}></div>
                 </div>
             </div>
             <div className="footer__contact-one">
             <div className="contact-footer__adress">
                    <p>
                    г. Орел, Московское шоссе, д.95
                    </p>
                </div>
                <div className="contact-footer__phone-one">
                    <p>
                    +7 (4862) 78-27-88

                    </p>
                </div>
                <div className="contact-footer__phone-two">
                    <p>
                    +7 (962) 475-27-88
                    </p>
                </div>
             </div>
             <div className="footer__contact-two">
                <div className="contact-footer__adress">
                    <p>
                    г. Орел, ул.МОПРа, д.7
                    </p>
                </div>
                <div className="contact-footer__phone-one">
                    <p>
                    +7 (4862) 78-27-88

                    </p>
                </div>
                <div className="contact-footer__phone-two">
                    <p>
                    +7 (962) 475-27-88
                    </p>
                </div>
             </div>
              <div className="footer__email">
                <div className="email-footer__title">
                    <p>
                        Email:
                    </p>
                </div>
                  <div className="email-footer__email">
                      <p>
                        orel-moto@bk.ru
                      </p>
                  </div>
              </div>
              <div className="footer__menu">
                    <ul>
                        <li>
                            <a href="">Главная</a>
                        </li>
                        <li>
                            <a href="">Сервис</a>
                        </li>
                        <li>
                            <a href="">Наш музей</a>
                        </li>
                        <li>
                            <a href="">Контакты</a>
                        </li>
                    </ul>
              </div>
        </footer>
    )
}

export default Footer
