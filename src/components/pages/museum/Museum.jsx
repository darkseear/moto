import React from 'react'
import Categories from '../../web_components_kit/categories/Categories'
import PageTitle from '../../web_components_kit/page_title/PageTitle'
import museum_photo_1 from '../../../images/museum_photo_1.jpg'
import museum_photo_2 from '../../../images/museum_photo_2.jpg'
import museum_photo_3 from '../../../images/museum_photo_3.jpg'
import museum_photo_4 from '../../../images/museum_photo_4.jpg'
import museum_photo_5 from '../../../images/museum_photo_5.jpg'
import museum_photo_6 from '../../../images/museum_photo_6.jpg'
import museum_photo_7 from '../../../images/museum_photo_7.jpg'
import museum_photo_8 from '../../../images/museum_photo_8.jpg'
import museum_photo_9 from '../../../images/museum_photo_9.jpg'

function Museum() {
    return (
        <>  
            <PageTitle  title={"Наш музей"} />
            <div className="__container">
                <div style={{ float:'left', marginRight:'10px'}}>
                <Categories />
                </div>
                <div style={{ paddingLeft:'280px' }}>
                    <div>
                        <p>
                        НАШ МУЗЕЙ РЕТРО МОТОТЕХНИКИ И дефицитных товаров времен СССР
                        </p>
                    </div>
                    <br />
                    <div>
                        <p style={{ lineHeight:'45px' }}>
                        Идея создания музея родилась неожиданно для нас самих. Все началось с увиденной из окна троллейбуса Явы-старушки. Она просто завораживала своей ухоженностью и идеальным состоянием. Мы не ожидали увидеть 50-летний мотоцикл в городе в принципе, а в таком состоянии и подавно. Через неделю мы уже приобрели похожую в неплохом состоянии, а вместе с ней и новых друзей и единомышленников, которым мы очень благодарны за все, что они для нас делают. Вторым мотоциклом, от приобретения которого мы не удержались, был ИЖ-49 1955-го года выпуска, в прекрасном рабочем состоянии. На нем мы неоднократно выезжали на мотопробеги и катались сами. Постепенно поиск старинных мотоциклов стал навязчивой идеей, а когда их стало уже достаточное количество, мы решили создать свой музей. Многие экспонаты нам приходится восстанавливать своими силами, некоторые помогают сделать наши друзья, а что-то удается приобрести в прекрасном рабочем состоянии. Также стоит выразить благодарность неравнодушным людям, которые совершенно безвозмездно приносят предметы старины в дар. Чтобы оживить экспозицию, мы решили представить вещи, отражающие быт и мировоззрение советских людей. Теперь мы с гордостью можем заявить, что у нас получилось и теперь в Орле тоже есть ретро музей мотоциклов и дефицитных товаров времен СССР. Мы стараемся не стоять на месте и регулярно пополняем фонды музея. Приходите, посмотрите. Мы Вам всегда рады.
                        </p>
                    </div>
                    <br />
                    <div >
                        <p>Вход в музей совершенно бесплатный.</p>
                        <br />
                        <div  style={{ textAlign:'center' }}> 
                             <img src={museum_photo_1} alt="" />
                        </div>
                    </div>
                    <br />
                    <div >
                        <br />
                        <div  style={{ textAlign:'center' }}> 
                             <img src={museum_photo_2} alt="" />
                        </div>
                        {/* <p>Вход в музей совершенно бесплатный.</p> */}
                    </div>
                    <br />
                    <div >
                        <br />
                        <div  style={{ textAlign:'center' }}> 
                             <img src={museum_photo_3} alt="" />
                        </div>
                        {/* <p>Вход в музей совершенно бесплатный.</p> */}
                    </div>
                    <br />
                    <div >
                        <br />
                        <div  style={{ textAlign:'center' }}> 
                             <img src={museum_photo_4} alt="" />
                        </div>
                        <p style={{ textAlign:'center' }}>JAWA 350/360 (1970 год)</p>
                    </div>
                    <br />
                    <div >
                        <br />
                        <div  style={{ textAlign:'center' }}> 
                             <img src={museum_photo_5} alt="" />
                        </div>
                        {/* <p>JAWA 350/360 (1970 год)</p> */}
                    </div>
                    <br />
                    <div >
                        <br />
                        <div  style={{ textAlign:'center' }}> 
                             <img src={museum_photo_6} alt="" />
                        </div>
                        {/* <p>ИЖ-49 (1955 год)</p> */}
                    </div>
                    <br />
                    <div >
                        <br />
                        <div  style={{ textAlign:'center' }}> 
                             <img src={museum_photo_7} alt="" />
                        </div>
                        <p style={{ textAlign:'center' }}>ИЖ-49 (1955 год)</p>
                    </div>
                    <br />
                    <div >
                        <br />
                        <div  style={{ textAlign:'center' }}> 
                             <img src={museum_photo_8} alt="" />
                        </div>
                        <p style={{ textAlign:'center' }}>Минск М105 (1971 год)</p>
                    </div>
                    <br />
                    <div >
                        <br />
                        <div  style={{ textAlign:'center' }}> 
                             <img src={museum_photo_9} alt="" />
                        </div>
                        <p style={{ textAlign:'center' }}>Simson KR 51/1 (1980 год)</p>
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}

export default Museum
