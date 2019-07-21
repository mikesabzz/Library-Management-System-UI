import React from 'react'
import './Footer.css'

function Footer(props) {
    return (
        <div className="footer">
            <h3>{ props.footer }</h3>
        </div>
    )
}

export default Footer