import React from 'react'
import Categories from '../../web_components_kit/categories/Categories'
import PageTitle from '../../web_components_kit/page_title/PageTitle'

function Museum() {
    return (
        <>  
            <PageTitle  title={"Наш музей"} />
            <div className="__container">
                <div style={{ float:'left', marginRight:'10px'}}>
                <Categories />
                </div>
                <div>
                    museum
                </div>
            </div>
        </>
    )
}

export default Museum
