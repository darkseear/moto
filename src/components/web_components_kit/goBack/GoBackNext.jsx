import React from 'react'
import { useHistory } from 'react-router'

function GoBackNext() {

    const history = useHistory()

    return (
        <div >
            <div onClick={()=>{ history.goBack() }}>  Back </div>
        </div>
    )
}

export default GoBackNext
