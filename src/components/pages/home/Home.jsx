import React from 'react'
import Categories from '../../web_components_kit/categories/Categories'
import News from '../../web_components_kit/news/News'
import RecentArrivals from '../../web_components_kit/recent_arrivals/RecentArrivals'
import Stocks from '../../web_components_kit/stocks/Stocks'

function Home() {
    return (
        <>
            <div>
                <News/>
                <RecentArrivals/>
                <Stocks/>
            </div>
        </>
    )
}

export default Home
