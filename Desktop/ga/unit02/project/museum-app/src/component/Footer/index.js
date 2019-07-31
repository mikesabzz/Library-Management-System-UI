import React from 'react'
import './Footer.css'

const Footer = (props) => {
    return (
        <div className="footer">
            <h3>{props.footer}</h3>
            <a href="https://github.com/mikesabzz">GitHub</a>
            <a href="https://www.linkedin.com/in/michael-sabzevari-539805131/">LinkedIn</a>
        </div>
    )
}

export default Footer