import React from 'react'
import './Artist.css'

const Artist = (props) => {
    return (
        <div className="artist-names">
            <p>Check out <a href={props.artist.url}>{props.artist.displayname}</a>'s work.</p>
        </div>
    )
}

export default Artist