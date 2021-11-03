import React from 'react'
import Categories from '../../web_components_kit/categories/Categories'
import PageTitle from '../../web_components_kit/page_title/PageTitle'

function Service() {
    return (
        <>  
            <PageTitle  title={"Сервис"} />
            <div>
                <div style={{ float:'left', marginRight:'10px'}}>
                    <Categories />
                </div>
                <div>
                    Service
                </div>
            </div>
        </>
    )
}

export default Service
