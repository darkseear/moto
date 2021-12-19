import React from 'react'
import { useHistory } from 'react-router'

function GoBackNext() {

    const history = useHistory()

    return (
        <div >
            <div className="go_back-button" onClick={()=>{ history.goBack() }}> Назад </div>
        </div>
    )
}

export default GoBackNext
