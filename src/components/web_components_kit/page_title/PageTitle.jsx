import React from 'react'
import { Link } from 'react-router-dom'

function PageTitle({ title , title_page=false}) {
    return (
            <div className="title_page">
                {
                   title_page && <div className="page-title_title">
                        <p>{title}</p>
                    </div>
                }
                
                <div className="page-title_ref">
                    <p> <span > <Link style={{ color:'grey' }} to={'/'}> Главная</Link> </span> / <span style={{color:'black' }}> {title} </span></p>
                </div>
            </div>    
    )
}

export default PageTitle
