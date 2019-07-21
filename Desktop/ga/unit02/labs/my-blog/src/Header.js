import React from 'react'
import './Header.css'

function Header(props) {
    return (
        <div className="header">
            <h1>{props.firstTitle}</h1>
            <div className="item">
            <h2>{props.home}</h2>
            <h2>{props.post}</h2>
            <h2>{props.about}</h2>
            </div>
        </div>

    )
}

export default Header